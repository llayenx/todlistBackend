const TodoServices = require("../services/todo.services")
   
  const deleteTodo = async (req,res)=>{
    try {
      const {id} = req.params
       const resut = await TodoServices.delete(req.params.id)
       
       res.status(204).send("no content")
    } catch (error) {
      res.status(400).json(error)
      
    }
  }

  const updateTodo = async (req, res) =>{
    try {
        const{id} = req.params
        const data = req.body
        const todoUpdated = await TodoServices.update(id,data)
        res.status(204).send()
        
    } catch (error) {
        res.status(400).json(error)
    }
  }

  const getTodosWithCategories = async(req,res) =>{
    try {
        const{userId}= req.params
        const todoWithCategories = await TodoServices.todoWithCategories(userId)
           res.json (todoWithCategories)
    } catch (error) {
      res.status(400).json(error) 
    }
  }
 
const createdTodo = async(req,res)=> {
    try {
        const newPost= req.body
        const post = await TodoServices.create(newPost)
        res.status(201).json(post) 
    } catch (error) {
     res.status(400).json(error)   
    }
}

module.exports ={
    createdTodo,
    getTodosWithCategories,
    updateTodo,
    deleteTodo
}    