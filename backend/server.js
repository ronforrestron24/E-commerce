import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/products', (req, res) => {
  const product = req.body;
});

app.listen(port, () => {
  connectDB();
  console.log('MongoDB connected');
  console.log(`Server is running on ${port}`);
});
