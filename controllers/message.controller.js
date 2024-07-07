const {Message} = require("../models/Message.js")
const { Users } = require("../models/Usuario.js")


const createMessage = async (comment,userId,postId,user_name)=>{
    const newMessage = await Message.create({
        comment,
        userId,
        postId,
        user_name
    })
    return newMessage
}

const getAllMessage = async ()=>{
    const data = await Message.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const getByPostMessages = async (postId)=>{
    const data = await Message.findAll({
        where:{
            postId:postId
        },
        include:[{ 
            model: Users,
            as:"user",
            attributes: {
               exclude:['id','createdAt', 'updatedAt',"password"]
            }  // Ajusta estos atributos a los que realmente existen en tu modelo Usuarios
        }],
        attributes:{
            exclude:['createdAt', 'updatedAt']
        }
    })
    return data
} 


module.exports = {
    createMessage,
    getAllMessage,
    getByPostMessages
}