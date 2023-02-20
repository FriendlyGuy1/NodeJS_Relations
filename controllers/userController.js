const User = require("../models/User")


const CreateUser = async (req,res)=>{
    if(!req.body.name ||!req.body.password) {
        res.status(404).send("Not found");
    }

    const user = await User.create({
        name: req.body.name,
        password: req.body.password
    })

    res.status(200).json(user)
}


module.exports = CreateUser
