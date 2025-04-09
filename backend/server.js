import express from 'express';

const app = express();

const port = 5000;

app.get('/products', (req, res) => {
  res.send('res.products');
});

app.listen(5000, () => {
  console.log(`Server is running on ${port}`);
});