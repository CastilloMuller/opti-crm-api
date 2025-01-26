import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import customerRoutes from './routes/customers.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
const port = process.env.PORT || 3000;

// Enable CORS for development
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../../opti-crm/dist')));

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
  
  // Send initial connection status
  ws.send(JSON.stringify({ type: 'connection', status: 'connected' }));
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/dashboard', async (req, res) => {
  try {
    res.json({
      stats: {
        totalLeads: 150,
        activeLeads: 75,
        convertedLeads: 45,
        conversionRate: "30%",
        totalValue: 250000
      },
      recentLeads: [
        {
          id: 1,
          name: "John Smith",
          company: "Tech Solutions Inc",
          status: "Active",
          value: 25000,
          lastContact: "2025-01-25"
        },
        {
          id: 2,
          name: "Sarah Johnson",
          company: "Digital Dynamics",
          status: "New",
          value: 15000,
          lastContact: "2025-01-24"
        },
        {
          id: 3,
          name: "Michael Brown",
          company: "Innovation Labs",
          status: "Converted",
          value: 50000,
          lastContact: "2025-01-23"
        }
      ],
      recentActivity: [
        {
          id: 1,
          type: "call",
          leadName: "John Smith",
          description: "Follow-up call scheduled",
          date: "2025-01-25T14:30:00"
        },
        {
          id: 2,
          type: "email",
          leadName: "Sarah Johnson",
          description: "Proposal sent",
          date: "2025-01-24T16:45:00"
        },
        {
          id: 3,
          type: "meeting",
          leadName: "Michael Brown",
          description: "Contract signed",
          date: "2025-01-23T11:00:00"
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/leads', (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Smith",
      company: "Tech Solutions Inc",
      email: "john@techsolutions.com",
      phone: "+1 555-0123",
      status: "Active",
      value: 25000,
      lastContact: "2025-01-25",
      notes: "Interested in enterprise solution"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Digital Dynamics",
      email: "sarah@digitaldynamics.com",
      phone: "+1 555-0124",
      status: "New",
      value: 15000,
      lastContact: "2025-01-24",
      notes: "Requesting product demo"
    },
    {
      id: 3,
      name: "Michael Brown",
      company: "Innovation Labs",
      email: "michael@innovationlabs.com",
      phone: "+1 555-0125",
      status: "Converted",
      value: 50000,
      lastContact: "2025-01-23",
      notes: "Contract signed"
    }
  ]);
});

app.get('/api/calendar', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Follow-up call with John Smith",
      start: "2025-01-27T14:30:00",
      end: "2025-01-27T15:30:00",
      type: "call",
      leadId: 1
    },
    {
      id: 2,
      title: "Product demo for Sarah Johnson",
      start: "2025-01-28T10:00:00",
      end: "2025-01-28T11:30:00",
      type: "meeting",
      leadId: 2
    },
    {
      id: 3,
      title: "Contract review with Michael Brown",
      start: "2025-01-29T15:00:00",
      end: "2025-01-29T16:00:00",
      type: "meeting",
      leadId: 3
    }
  ]);
});

app.get('/api/analytics', (req, res) => {
  res.json({
    leadsByStatus: {
      New: 25,
      Active: 75,
      Converted: 45,
      Lost: 5
    },
    conversionTrend: [
      { month: "Jan", value: 28 },
      { month: "Feb", value: 32 },
      { month: "Mar", value: 35 },
      { month: "Apr", value: 30 },
      { month: "May", value: 38 },
      { month: "Jun", value: 42 }
    ],
    valueByStage: {
      Prospecting: 150000,
      Qualification: 200000,
      Proposal: 300000,
      Negotiation: 250000,
      Closed: 500000
    },
    activityMetrics: {
      calls: 45,
      emails: 120,
      meetings: 25
    }
  });
});

// Mount the customer routes
app.use('/api/customers', customerRoutes);

// Handle SPA routing - must be after API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../opti-crm/dist/index.html'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
