const { DataTypes} = require ("sequelize")
const db = require( "../utils/database")

const User = db.define( "users",{ 
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },
     password: {
        type: DataTypes.STRING(15),
        unique: true,
        allownul: false
     }



},
{
    timestamps: false
}

)

module.exports = User 