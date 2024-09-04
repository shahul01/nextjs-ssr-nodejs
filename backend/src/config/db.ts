import { Sequelize } from 'sequelize';
import TodoModel from '../models/todo.model';
import { pgDatabase, pgHost, pgPassword, pgPort, pgUsername } from '../constants';

const dbSequelize = new Sequelize(
    pgDatabase,
    pgUsername,
    pgPassword,
    {
        dialect: 'postgres',
        host: pgHost,
        port: pgPort
    }
);

const models = {
    Todo: TodoModel(dbSequelize)
};

const { Todo } = models;

// association


export {
    dbSequelize,
    Todo
};
