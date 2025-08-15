const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
