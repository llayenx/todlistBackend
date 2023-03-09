const {Router} = require("express")
const User = require("../models/user.models")
const Todo = require("../models/todo.models")
const Category = require("../models/category.models")
const {createUser} = require("../controllers/user.controllers")

const router = Router()

 router.post("/api/v1/users", createUser) 





module.exports = router  