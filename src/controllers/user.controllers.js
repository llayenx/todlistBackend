const userServices = require("../services/user.services")

const createUser =  async (req, res) =>{
   try {
    const newUser = req.body
    const result = await userServices.create(newUser)
    res.status(200).json(result)
   } catch (error) {
    res.status(400).json(error)
    
   }
} 
module.exports = {
    createUser
}