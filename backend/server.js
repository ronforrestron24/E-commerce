import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();


const app = express();

const port = 5000;

app.post("/products", (req, res) => {
  res.send("Product created");
});

app.listen(5000, () => {
  connectDB();
  console.log('MongoDB connected');
  console.log(`Server is running on ${port}`);
});