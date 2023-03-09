const {Router} = require("express")
  
const {createdTodo, getTodosWithCategories, updateTodo, deleteTodo} = require("../controllers/todo.controllers")
const Todo = require("../models/todo.models")

const router = Router()

router.get("/api/v1/todos/:userId/categories", getTodosWithCategories)

router.post("/api/v1/todos", createdTodo)

router.put("/api/v1/todos/:id", updateTodo)

router.delete("/api/v1/todos/:id", deleteTodo)

/* router.delete("/api/v1/todos/:id"), async (req,res)=>{
    try {
        const{id} = req.params
        const result = await Todo.destroy ({
            where : {id}
        })
        res.status(204).send("no content")
    } catch (error) {
        res.status(400).json(error)
        
    }
} */

module.exports = router