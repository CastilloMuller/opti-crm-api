import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// In-memory data store
const leads = [];
const tasks = [];
let nextLeadId = 1;
let nextTaskId = 1;

// Sample data
leads.push({
  id: nextLeadId++,
  name: "John Doe",
  email: "john@example.com",
  phone: "+31612345678",
  status: "Hot",
  decisionDate: "2024-02-15",
  quotationValue: 25000,
  outstandingTasks: 2,
  notes: "Interested in solar panels for their new home"
});

tasks.push({
  id: nextTaskId++,
  title: "Follow-up call",
  type: "Bellen",
  scheduledDate: "2024-01-28T10:00:00",
  description: "Discuss quotation details",
  leadId: 1,
  leadName: "John Doe",
  completed: false
});

// Configure CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://opti-crm-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes

// Dashboard stats
app.get('/api/dashboard/stats', (req, res) => {
  const stats = {
    totalLeads: leads.length,
    activeLeads: leads.filter(l => l.status !== 'Niets mee doen').length,
    tasksToday: tasks.filter(t => {
      const today = new Date();
      const taskDate = new Date(t.scheduledDate);
      return taskDate.toDateString() === today.toDateString();
    }).length,
    totalQuotationValue: leads.reduce((sum, lead) => sum + (lead.quotationValue || 0), 0),
    upcomingDecisions: leads.filter(l => new Date(l.decisionDate) > new Date()).length
  };
  res.json(stats);
});

// Leads
app.get('/api/leads', (req, res) => {
  res.json(leads);
});

app.get('/api/leads/:id', (req, res) => {
  const lead = leads.find(l => l.id === parseInt(req.params.id));
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  res.json(lead);
});

app.post('/api/leads', (req, res) => {
  const lead = {
    id: nextLeadId++,
    ...req.body,
    outstandingTasks: 0
  };
  leads.push(lead);
  broadcastUpdate('lead_created');
  res.status(201).json(lead);
});

app.put('/api/leads/:id', (req, res) => {
  const index = leads.findIndex(l => l.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  leads[index] = { ...leads[index], ...req.body };
  broadcastUpdate('lead_updated');
  res.json(leads[index]);
});

// Tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/leads/:leadId/tasks', (req, res) => {
  const leadTasks = tasks.filter(t => t.leadId === parseInt(req.params.leadId));
  res.json(leadTasks);
});

app.post('/api/tasks', (req, res) => {
  const task = {
    id: nextTaskId++,
    ...req.body,
    completed: false
  };
  
  // Update lead's outstanding tasks count
  const lead = leads.find(l => l.id === task.leadId);
  if (lead) {
    lead.outstandingTasks++;
  }
  
  tasks.push(task);
  broadcastUpdate('task_created');
  res.status(201).json(task);
});

app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const wasCompleted = tasks[index].completed;
  const willBeCompleted = req.body.completed;
  
  tasks[index] = { ...tasks[index], ...req.body };
  
  // Update lead's outstanding tasks count if completion status changed
  if (!wasCompleted && willBeCompleted) {
    const lead = leads.find(l => l.id === tasks[index].leadId);
    if (lead && lead.outstandingTasks > 0) {
      lead.outstandingTasks--;
    }
  } else if (wasCompleted && !willBeCompleted) {
    const lead = leads.find(l => l.id === tasks[index].leadId);
    if (lead) {
      lead.outstandingTasks++;
    }
  }
  
  broadcastUpdate('task_updated');
  res.json(tasks[index]);
});

// Activities
app.get('/api/leads/:leadId/activities', (req, res) => {
  const leadTasks = tasks.filter(t => t.leadId === parseInt(req.params.leadId));
  const activities = leadTasks.map(task => ({
    type: task.type,
    date: task.scheduledDate,
    description: task.title
  }));
  res.json(activities);
});

// WebSocket setup
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      broadcastUpdate(data.type);
    } catch (error) {
      console.error('WebSocket message error:', error);
    }
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function broadcastUpdate(type) {
  const message = JSON.stringify({ type, timestamp: new Date() });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Create HTTP server
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Health check available at http://0.0.0.0:${port}/health`);
  console.log(`WebSocket server is running`);
});
