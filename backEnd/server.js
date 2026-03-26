const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connect
connectDB();

// routes
app.use('/api', productRoutes);

// test route
app.get('/', (req, res) => {
  res.send('API Running...');
});

// server start
app.listen(5000, () => {
  console.log('Server running on port 5000');
});