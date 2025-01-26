import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import http from 'http';
import customerRoutes from './routes/customers.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());

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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Dashboard data endpoint
app.get('/api/dashboard', async (req, res) => {
  try {
    res.json({
      total: 0,
      value: 0,
      customers: [],
      recentActivity: []
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Mount the customer routes
app.use('/api/customers', customerRoutes);

// Important: Listen with the http server instead of app
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
