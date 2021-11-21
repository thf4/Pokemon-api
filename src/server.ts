import app from './main';
import express from 'express';
import "dotenv/config";

const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => console.log(`Server is running on ${port}`));