const { DataTypes} = require ("sequelize")
const db = require( "../utils/database")

const Todo = db.define( "todos",{ 
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue : "pendiente"
    },

     usersId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "user_id"
     },

     categoryId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "category_id"
     }



},
{
    timestamps: false
}
)

module.exports = Todo