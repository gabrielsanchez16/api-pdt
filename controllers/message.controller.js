const {Message} = require("../models/Message.js")

const createMessage = async (comment,user_id,post_id,user_name)=>{
    const newMessage = await Message.create({
        comment,
        user_id,
        post_id,
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

const getByPostMessages = async (post_id)=>{
    const data = await Message.findAll({
        where:{
            post_id:post_id
        },
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