import { DataTypes, Sequelize } from 'sequelize';

const Todo = (dbSequelize: Sequelize) => {
    const TodoDefinition = dbSequelize.define(
        'Todo',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUID,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    );

    // associate



    return TodoDefinition;

};

export default Todo;
