import expres, { Express, Request, Response } from 'express';
import apiRouter from './src/routes';
import connectionDB from './src/connection/connection';
const express = require('express');
const morgan = require('morgan');


const app = express();
const port = 3006;

app.use(morgan("dev"));
app.use(express.json());
app.use(apiRouter);

connectionDB();

app.listen(port, ()=>{
  console.log(`App usando el puerto ${port}`);
});