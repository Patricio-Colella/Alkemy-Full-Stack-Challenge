const { User,Operation } = require("../db")

const sign_up = async(req,res,next)=>{
    try {
        await User.create(req.body)
        res.send("creado")
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}

const login = async(req,res,next)=>{
    const {password,email} = req.query
    try {
        const user_loged = await User.findOne({
            where:{password,email},
            include:{model:Operation}
        })
        res.send(user_loged)
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
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
    sign_up,
    login,
    get_users,
    edit_user
}