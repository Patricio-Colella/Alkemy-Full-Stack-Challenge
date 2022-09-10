const { User,Operation } = require("../db")

const ingress = async(req,res,next)=>{
    try {
        const user = await User.findOrCreate({where:req.body,defaults:req.body})
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}

const edit_user = async(req,res,next)=>{
    try {
        await User.update(req.body,{where:{ID:parseInt(req.params.ID)}})
        res.send("actualizado")
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

const get_users = async(req,res,next)=>{
    try {
        res.send(await User.findAll())
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}


module.exports={
    ingress,
    get_users,
    edit_user
}