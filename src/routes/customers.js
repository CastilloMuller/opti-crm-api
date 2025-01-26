import express from 'express';
import { Router } from 'express';

const router = Router();

// Get all customers
router.get('/', async (req, res) => {
  try {
    // Temporary response until we add database
    res.json([
      { id: 1, name: 'Test Customer 1', email: 'customer1@example.com' },
      { id: 2, name: 'Test Customer 2', email: 'customer2@example.com' }
    ]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = req.body;
    // Temporary response until we add database
    res.status(201).json({ ...customer, id: Math.floor(Math.random() * 1000) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
});

// Get customer notes
router.get('/:id/notes', async (req, res) => {
  try {
    const { id } = req.params;
    // Temporary response until we add database
    res.json([
      { id: 1, customerId: id, content: 'Test note 1' },
      { id: 2, customerId: id, content: 'Test note 2' }
    ]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// Add customer note
router.post('/:id/notes', async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    // Temporary response until we add database
    res.status(201).json({
      id: Math.floor(Math.random() * 1000),
      customerId: id,
      content
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add note' });
  }
});

export default router;
