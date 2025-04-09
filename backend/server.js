import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();


const app = express();

const port = 5000;

app.get('/products', (req, res) => {
  res.send('res.products');
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log('MongoDB connected');
  console.log(`Server is running on ${port}`);
});