import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import analyzeRouter from './routes/analyze.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/analyze', analyzeRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // Server boot message
  console.log(`Server running on port ${port}`);
});
