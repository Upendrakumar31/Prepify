import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin : "https://prepify-frontend-xtu3.onrender.com",
  credentials: true,
}));


import authRouter from './routes/auth.routes.js';
import interviewRouter from './routes/interview.routes.js';


// using all the routes here
app.use('/api/auth', authRouter)
app.use('/api/interview', interviewRouter)


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Prepify API!' });
});

export default app;