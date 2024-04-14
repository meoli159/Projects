import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import 'dotenv/config';

import { routes } from './routes/v1/index.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cors({ origin: process.env.REACT_URL }));

//router
app.use('/api/v1', routes);

//run database connect
import './models/configs/DBConnect.js';
