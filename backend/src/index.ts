/**
 * server → controller → routes → models
 */

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { initRoutes } from './routes';
import { dbSequelize } from './config/db';
import { urlFrontend } from './constants';


dotenv.config();

const port = Number(process.env.PORT) || 8010;
const app = express();

app.use(cors({ credentials: true, origin: urlFrontend }));
app.use(express.json());

initRoutes(app);


dbSequelize.sync({ alter:true, force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
