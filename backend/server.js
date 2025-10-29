import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import feedbackRoutes from './routes/feedback.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Use feedback API routes
app.use('/api/feedback', feedbackRoutes);

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
