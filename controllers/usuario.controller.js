const {Users} = require("../models/Usuario.js")




const createUser = async (name_complete,carrera,user_name,password,url_image) => {

    const newUser = await Users.create({
        name_complete,
        carrera,
        user_name,
        password,
        url_image
    })
    return  {
        "id":newUser?.id,
        "name_complete": newUser?.name_complete,
        "carrera": newUser?.carrera,
        "user_name": newUser?.user_name,
      };
}

const getUserById = async (id)=>{
    const data = Users.findOne({
        where:{
            id:id
        },
        attributes: {
            exclude: ['password',"updatedAt","createdAt"]
        }
    })
    return data
}

const getSession = async (user_name)=>{

    const data = Users.findOne({
        where:{
            user_name:user_name,
        },
        attributes: {
            exclude: ['password',"updatedAt","createdAt"]
        }
    })
    return data
}


const editUser = async (user_name,id,url_image)=>{
    const data = await Users.update({
        user_name:user_name,
        url_image:url_image
    },{
        where:{
            id:id
        }
    })
    return data
}




module.exports = {
    createUser,
    getSession,
    editUser,
    getUserById
}