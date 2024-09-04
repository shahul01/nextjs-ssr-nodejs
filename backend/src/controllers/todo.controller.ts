import { Request, Response } from "express";
import { randomUUID } from 'crypto';
import { Todo } from '../config/db';

const todos = [ {id: '1', title: 'hello'}, {id: '2', title: 'there'} ];

type Todo = {
    id: string;
    title: string;
};

const getTodos = async (req: Request, res: Response) => {
    try {

        res.status(200).json({ todos });

    } catch (error) {
        console.error(error);
    };
};

const createTodo = async (req:Request, res:Response) => {
    try {
        const { body: todoReq } = req;
        if (!todoReq.title) throw new Error('No title sent.');

        const todoPayload: Todo = {
            id: randomUUID(),
            title: todoReq.title
        };

        const {dataValues: { title: createdTodoTitle } } = await Todo.create(todoPayload)
        if (!createdTodoTitle) throw new Error('Server error.');

        return res
            .status(200)
            .json({message: `Created todo with ${todoPayload.title}`});

    } catch (error) {
        console.error(error);
    };
};

export default {
    getTodos,
    createTodo
};
