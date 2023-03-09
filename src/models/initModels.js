 const User = require("../models/user.models")
 const Todo = require("../models/todo.models")
 const Category = require("../models/category.models")

 const initModels = () => {
    User.hasMany(Todo,{foreignKey: "usersId"})
    Todo.belongsTo(User,{foreignKey: "usersId"})

     Category.hasMany(Todo,{foreignKey: "categoryId"})
     Todo.belongsTo(Category,{foreignKey: "categoryId"})

 }


 module.exports = initModels  