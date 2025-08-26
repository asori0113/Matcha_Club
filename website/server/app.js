import express from 'express';
import cookieParser from 'cookie-parser'

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToMongoDatabase from './database/mongoDB.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workFlowRouter from './routes/workflow.routes.js';

import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workFlowRouter);


app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('welcome to the subscription tracker API');
});

app.listen(PORT, async() => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

    await connectToMongoDatabase();
});

export default app;