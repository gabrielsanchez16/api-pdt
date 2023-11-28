const {Post} = require("../models/Post.js")
const {Message} = require("../models/Message.js")

const createPost = async (info,user_id,carrera,user_name,likes)=>{
    const newPost = await Post.create({
        info,
        user_id,
        carrera,
        user_name,
        likes

    })
    return newPost
}

const getAllPost = async ()=>{
    const data = await Post.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const getByUserId = async (user_id) =>{
    const data = await Post.findAll({
        where:{
            user_id:user_id
        },
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