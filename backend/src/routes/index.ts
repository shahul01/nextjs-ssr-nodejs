import type { Express } from 'express';


export function initRoutes(app:Express) {
    app.use('/', (req, res) => {
        res.status(200).json({message: 'Hello from backend!'});
    });

};
