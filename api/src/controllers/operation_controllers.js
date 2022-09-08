const sequelize = require("sequelize")
const { Operation,User } = require("../db")

// {
//     "info":"test",
//     "amount":1,
//     "date":"1990-06-06T03:00:00.000Z",
//     "type":"entro"
//   }

const post_operation = async(req,res,next)=>{
    try {
        const {UserID,type,amount} = req.body
        const created = await Operation.create(req.body)

        const dec_inc="account_amount"+(type==="ingreso"?"+":"-")+`${amount}`

        const updated_amount ={ account_amount: sequelize.literal(dec_inc) }

        await User.update(updated_amount,{ where: { ID: UserID } });
        res.send(created)
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

const get_single_operation = async(req,res,next)=>{
    try {
        const ID = parseInt(req.params.ID)
        const operation = await Operation.findByPk(ID)
        res.send(operation)
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

const get_my_operations = async(req,res,next)=>{
    try {
        const UserID = parseInt(req.params.UserID)
        const my_operations = await Operation.findAll({where:{UserID}})
        res.send(my_operations)
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

const edit_operation = async(req,res,next)=>{
    try {
        const ID = parseInt(req.params.ID)
        await Operation.update(req.body,{where:{ID}})
        res.send("actualizado")
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

const delete_operation = async(req,res,next)=>{
    try {
        const ID = parseInt(req.params.ID)
        await Operation.destroy({where:{ID}})
        res.send("eliminado")
    } catch (error) {
        console.log(error.message)
        res.status(400).send()
    }
}

module.exports={
    post_operation,
    get_my_operations,
    get_single_operation,
    edit_operation,
    delete_operation
}