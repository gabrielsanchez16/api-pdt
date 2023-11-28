const {createMessage,getAllMessage,getByPostMessages} = require("../controllers/message.controller")

const create = (req,res)=>{
    const {comment,user_id,post_id,user_name} = req.body;
    if (!comment  && !user_id && !post_id) {
        return res.status(400).json({ message: 'data not found' })
    } else if (
        !comment||
        !user_id ||
        !post_id

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                comment: "text",
                user_id: 'string',
                post_id: "string"
            },
        });
    } else {
        const response = createMessage(comment,user_id,post_id,user_name)
            .then((response) => {
                res.status(201).json({ 
                    message: `comment has been successfully created`,
                    comment: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };
}


const getAll = (req,res)=>{
   
        const response = getAllMessage()
            .then((response) => {
                res.status(200).json({ 
                    message: `comment have been successfully recovered`,
                    comments: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };

    const getByPost = (req,res)=>{
        const {post_id} = req.query;
        if (!post_id) {
            return res.status(400).json({
                message: 'All fiels must be completed', fields: {
                    post_id: "string"
                },
            });
        }else {
            const response = getByPostMessages(post_id)
                .then((response) => {
                    res.status(200).json({ 
                        message: `message have been successfully recovered`,
                        comment: response
                    })
                })
                .catch(err=> {
                    console.log(err)
                }) 
        };
    }


module.exports = {
    create,
    getAll,
    getByPost
} 