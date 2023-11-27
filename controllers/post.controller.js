const {Post} = require("../models/Post.js")
const {Message} = require("../models/Message.js")

const createPost = async (info,user_id,likes)=>{
    const newPost = await Post.create({
        info,
        user_id,
        likes
    })
    return newPost
}

const getAllPost = async ()=>{
    const data = await Post.findAll({
        include: {
            model: Message,
            as: "Message",
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        },
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

module.exports = {
    createPost,
    getAllPost,
    getByUserId
}