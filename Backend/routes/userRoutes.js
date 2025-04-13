const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

//  Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password)))
      return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected route
router.get('/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

module.exports = router;
