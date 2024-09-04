import { DataTypes, Sequelize } from 'sequelize';

const Todo = (sequelize: Sequelize) => {
    const TodoDefinition = sequelize.define(
        'Todo',
        {
            id: {
                type: DataTypes.UUIDV4,
                defaultValue: DataTypes.UUIDV4,
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
