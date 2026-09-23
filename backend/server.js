import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import feedbackRoutes from './routes/feedback.js';

dotenv.config();

const app = express();

connectDB(process.env.MONGO_URI);

app.use(
  cors({
    origin: 'https://feedback-app-final.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
