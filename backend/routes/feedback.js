import express from 'express';
import Feedback from '../models/Feedback.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { text, rating } = req.body;
    const newFeedback = new Feedback({ text, rating });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
