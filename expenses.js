import express from 'express';
import Expense from '../models/Expense.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all expenses for user
router.get('/', auth, async (req, res) => {
  try {
    const items = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add expense
router.post('/', auth, async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    if (!title || !amount) return res.status(400).json({ error: 'Title and amount required' });
    const expense = new Expense({ user: req.user.id, title, amount, category, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete expense
router.delete('/:id', auth, async (req, res) => {
  try {
    const exp = await Expense.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Not found' });
    if (exp.user.toString() !== req.user.id) return res.status(403).json({ error: 'Not allowed' });
    await exp.deleteOne();
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
