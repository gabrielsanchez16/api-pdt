const {createPost,getAllPost,getByUserId} = require("../controllers/post.controller")

const create = (req,res)=>{
    const {info,user_id} = req.body;
    if (!info  && !user_id) {
        return res.status(400).json({ message: 'data not found' })
    } else if (
        !info||
        !user_id 

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                info: "text",
                user_id: 'string',
            },
        });
    } else {
        const response = createPost(info,user_id)
            .then((response) => {
                res.status(201).json({ 
                    message: `Post has been successfully logged in`,
                    post: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };
}


const getAll = (req,res)=>{
   
        const response = getAllPost()
            .then((response) => {
                res.status(200).json({ 
                    message: `post have been successfully recovered`,
                    Posts: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };

    const getByUser = (req,res)=>{
        const {user_id} = req.body;
        if (!user_id) {
            return res.status(400).json({
                message: 'All fiels must be completed', fields: {
                    info: "text",
                    user_id: 'string'
                },
            });
        }else {
            const response = getByUserId(user_id)
                .then((response) => {
                    res.status(200).json({ 
                        message: `Post have been successfully recovered`,
                        post: response
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
    getByUser
}