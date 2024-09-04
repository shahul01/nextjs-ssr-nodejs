/**
 * server → controller → routes → models
 */

import dotenv from 'dotenv';
import express from 'express';
import { initRoutes } from './routes';
import { dbSequelize } from './config/db';


dotenv.config();

const port = Number(process.env.PORT) || 8010;
const app = express();

// app.use(cors);
app.use(express.json());

initRoutes(app);


dbSequelize.sync({ alter:true, force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
