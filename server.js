// SERVE .env
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>[[The Homepage]]</h1>');
});

app.listen(PORT, () => console.log(`Application listening on ${PORT}`));