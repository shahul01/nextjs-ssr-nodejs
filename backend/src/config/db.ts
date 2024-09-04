import { Sequelize } from 'sequelize';
import TodoModel from '../models/todo.model';
import { pgDatabase, pgHost, pgPassword, pgPort, pgUsername } from '../constants';

const sequelize = new Sequelize(
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
    Todo: TodoModel(sequelize)
};

const { Todo } = models;

// association


export {
    sequelize,
    Todo
};
