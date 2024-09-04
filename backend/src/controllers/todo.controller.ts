import { Request, Response } from "express";

const todos = [ {id: '1', title: 'hello'}, {id: '2', title: 'there'} ];

const getTodos = async (req: Request, res: Response) => {
    try {

        res.status(200).json({ todos });

    } catch (error) {
        console.error(error);
    };
};

export default {
    getTodos
};
