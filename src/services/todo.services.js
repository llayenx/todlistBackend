const Todo = require("../models/todo.models")
const Category = require("../models/category.models")

class TodoServices {
 static async create(newPost){
    try {
        const  result  = await Todo.create(newPost)
        return result
    } catch (error) {
       throw error 
    }
 }
 static async todoWithCategories(userId) {
    try {
        const result = await Todo.findByPk(userId,
            {
                include:{
                    model: Category
                }
            }  
            ) 
            return result  
    } catch (error) {
      throw error  
    }
 }
 static async update(id, data){
    try {
        const updateTodo = await Todo.update(data,{
            where : {id}
        })
        return updateTodo
        
    } catch (error) {
        throw error
        
    }
 }
 static async delete(id){
    try {
        const result  = await Todo.destroy({
            where : {id}
        })
        return result
    } catch (error) {
       throw error 
    }

  } 

}

module.exports = TodoServices