const express = require ("express")
const cors = require ("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const userRoutes = require("./routes/user.routes")
const todoRoutes = require("./routes/todo.routes")

initModels()


 
const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
 

const PORT = 8001

db.authenticate()
.then(()=>{
    console.log("Base de datos conectada")
})
 .catch((error) => console.log(error))

 db.sync({alter: true})
 .then(() => console.log("Base de datos syncronizada"))
 .catch((error) => console.log(error))

  
app.get("/", (req, res)=>{
    res.send("Welcome to my api") 
})

app.use(userRoutes)
app.use(todoRoutes)


app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto 8001")
})  