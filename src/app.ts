import 'reflect-metadata';
import express from 'express';
import userRoutes from './routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

export default app;