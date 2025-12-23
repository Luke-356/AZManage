import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/records', records);

//start the express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

