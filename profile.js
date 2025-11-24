import express from 'express';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

router.put('/', auth, async (req, res) => {
  const { name } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  user.name = name || user.name;
  await user.save();
  res.json({ success: true, user: { id: user._id, name: user.name, email: user.email } });
});

export default router;

