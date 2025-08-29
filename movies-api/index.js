import './db/index.js';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import usersRouter from './api/users/index.js';
import authenticate from './authenticate/index.js';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('Something went wrong!');
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();
const port = process.env.PORT;

// Enable CORS for all requests
app.use(cors());

app.use(express.json());


// Users router
app.use('/api/users', usersRouter);

// 👇 must be after all routes/middleware
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
