const {Post} = require("../models/Post.js")
const {Message} = require("../models/Message.js")
const { Users } = require("../models/Usuario.js")

const createPost = async (info,userId,likes,url_image)=>{
    const newPost = await Post.create({
        info,
        userId,
        likes,
        url_image
    })
    return newPost
}
 
const getAllPost = async ()=>{
    const data = await Post.findAll({
        include: [{ 
            model: Users,
            as:"user",
            attributes: {
               exclude:['id','createdAt', 'updatedAt',"password"]
            }  // Ajusta estos atributos a los que realmente existen en tu modelo Usuarios
        }],attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })  
    return data
} 

const getByUserId = async (userId) =>{
    const data = await Post.findAll({
        where:{
            userId:userId
        },
        include: [{ 
            model: Users,
            as:"user",
            attributes: {
               exclude:['id','createdAt', 'updatedAt',"password"]
            }  // Ajusta estos atributos a los que realmente existen en tu modelo Usuarios
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const addLike = async (post_id,like) =>{
    const data = await Post.update({
        likes:like
    },{
        where:{
            id:post_id
        }
    })
    return data
}

module.exports = {
    createPost,
    getAllPost,
    getByUserId,
    addLike
}