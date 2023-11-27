const {Usuario} = require("../models/Usuario.js")




const createUser = async (name_complete,carrera,user_name,password) => {

    const newUser = await Usuario.create({
        name_complete,
        carrera,
        user_name,
        password
    })
    return  newUser
}

const getSession = async (user_name,password)=>{
    const data = Usuario.findOne({
        where:{
            user_name:user_name,
            password: password
        },
        attributes: {
            exclude: ['password',"updatedAt","createdAt"]
        }
    })
    return data
}




module.exports = {
    createUser,
    getSession
}