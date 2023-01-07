// SERVE .env
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

import { router as viewsRouter } from './routes/views';

// SECTION Serve Public Files
app.use(express.static('public'));

// SECTION - Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// SECTION - Views Routes
app.use('/', viewsRouter);

app.listen(PORT, () => console.log(`Application listening on ${PORT}`));