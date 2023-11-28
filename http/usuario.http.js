const {createUser,getSession} = require('../controllers/usuario.controller')

const create = (req,res) => {
    const {name_complete,user_name,carrera,password} = req.body;
    if (!name_complete && !user_name && !carrera && !password) {
        return res.status(400).json({ message: 'Data Not Found' })
    } else if (
        !name_complete ||
        !user_name||
        !carrera ||
        !password 

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                name_complete: 'string',
                user_name: "string",
                carrera: 'string',
                password: 'string'
            },
        });
    } else {
        const response = createUser(name_complete,carrera,user_name,password)
            .then((response) => {
                res.status(201).json({ 
                    message: `user created succesfuly with id: ${response.id}`,
                    user: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };

}

const login = (req,res)=>{
    const {user_name,password} = req.query;
    
   
    if (!user_name  && !password) {
        return res.status(400).json({ message: 'data not found' })
    } else if (
        !user_name||
        !password 

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                user_name: "string",
                password: 'string'
            },
        });
    } else {
        const response = getSession(user_name,password)
            .then((response) => {
                res.status(200).json({ 
                    message: `user has been successfully logged in`,
                    user: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };
}



module.exports = {
    create,
    login
}