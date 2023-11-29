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

const getSession = async (user_name)=>{

    const data = Usuario.findOne({
        where:{
            user_name:user_name,
        },
        attributes: {
            exclude: ['password',"updatedAt","createdAt"]
        }
    })
    return data
}


const editUser = async (user_name,id)=>{
    const data = await Usuario.update({
        user_name:user_name
    },{
        where:{
            id:user_id
        }
    })
    return data
}




module.exports = {
    createUser,
    getSession,
    editUser
}