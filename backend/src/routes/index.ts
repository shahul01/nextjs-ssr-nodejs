import todoRoutes from './todo.route';
import type { Express } from 'express';


export function initRoutes(app:Express) {
    app.use('/ping', (req, res) => {
        res.status(200).json({message: 'Hello from backend!'});
    });

    app.use('/todos', todoRoutes);

};
