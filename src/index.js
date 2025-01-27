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
const wss = new WebSocketServer({ 
  server,
  path: '/ws',
  clientTracking: true
});

const port = process.env.PORT || 3000;

// Enable CORS for development
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// WebSocket connection handling
wss.on('connection', (ws, req) => {
  console.log('Client connected from:', req.socket.remoteAddress);
  
  // Send initial connection status
  ws.send(JSON.stringify({ 
    type: 'connection', 
    status: 'connected',
    timestamp: new Date().toISOString()
  }));
  
  // Set up ping-pong to keep connection alive
  ws.isAlive = true;
  ws.on('pong', () => {
    ws.isAlive = true;
  });
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('received:', data);
      
      // Echo back the message
      ws.send(JSON.stringify({
        type: 'echo',
        data,
        timestamp: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
    ws.isAlive = false;
  });
  
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    ws.isAlive = false;
  });
});

// Set up interval to check for stale connections
const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) {
      return ws.terminate();
    }
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', () => {
  clearInterval(interval);
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    connections: wss.clients.size
  });
});

app.get('/api/dashboard', async (req, res) => {
  try {
    // Get total leads count
    const totalLeads = 150;
    const activeLeads = 75;
    const convertedLeads = 45;
    const totalValue = 250000;

    // Calculate conversion rate
    const conversionRate = ((convertedLeads / totalLeads) * 100).toFixed(1) + '%';

    // Prepare response
    const response = {
      stats: {
        total: totalLeads,
        active: activeLeads,
        converted: convertedLeads,
        conversionRate,
        value: totalValue
      },
      recentLeads: [
        {
          id: 1,
          name: "John Smith",
          company: "Tech Solutions Inc",
          status: "active",
          value: 25000,
          lastContact: "2025-01-25"
        },
        {
          id: 2,
          name: "Sarah Johnson",
          company: "Digital Dynamics",
          status: "new",
          value: 15000,
          lastContact: "2025-01-24"
        },
        {
          id: 3,
          name: "Michael Brown",
          company: "Innovation Labs",
          status: "converted",
          value: 50000,
          lastContact: "2025-01-23"
        }
      ],
      recentActivity: [
        {
          id: 1,
          type: "call",
          description: "Follow-up call with John Smith",
          date: "2025-01-25T14:30:00Z"
        },
        {
          id: 2,
          type: "email",
          description: "Sent proposal to Sarah Johnson",
          date: "2025-01-24T16:45:00Z"
        },
        {
          id: 3,
          type: "meeting",
          description: "Contract signed with Michael Brown",
          date: "2025-01-23T11:00:00Z"
        }
      ]
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Mount the customer routes
app.use('/api/customers', customerRoutes);

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
