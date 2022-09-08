const { User,Operation } = require('../../src/db')

async function populate(){
    await User.create({name:"pato",user_name:"wiko",password:"1234",email:".com",account_amount:1})
    await Operation.create({info:"primer ingreso",amount:7,date:new Date(2022,09,07),type:"ingreso",UserID:1})
    await Operation.create({info:"segundo ingreso",amount:4,date:new Date(2022,09,07),type:"ingreso",UserID:1})
    await Operation.create({info:"primer egreso",amount:2,date:new Date(2022,09,07),type:"egreso",UserID:1})
    await Operation.create({info:"segundo egreso",amount:8,date:new Date(2022,09,07),type:"egreso",UserID:1})
    console.log("listo")
}

module.exports={
    populate
}