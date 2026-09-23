import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import feedbackRoutes from './routes/feedback.js';

dotenv.config();

const app = express();

// 1) Connect to MongoDB using connection string in .env
connectDB(process.env.MONGO_URI);

// 2) CORS middleware – allow frontend origins
const allowedOrigins = [
  'http://localhost:5173',          // Vite dev
  'https://vishalmohindra.github.io', // GitHub Pages
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow tools / server-to-server (no origin) and whitelisted origins
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// 3) Parse JSON request bodies
app.use(express.json());

// 4) API routes for feedback
app.use('/api/feedback', feedbackRoutes);

// 5) Simple test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// 6) Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
