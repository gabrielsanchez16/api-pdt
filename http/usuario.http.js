const { createUser, getSession, editUser,getUserById } = require('../controllers/usuario.controller')
const { Users } = require("../models/Usuario")
const bcrypt = require('bcrypt')

const create = (req, res) => {
    const { name_complete, user_name, carrera, password } = req.body;
    const data = req.file;
    if (!name_complete && !user_name  && !carrera && !password) {
        return res.status(400).json({ message: 'Data Not Found' })
    } else if (
        !name_complete ||
        !user_name ||
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
        const response = createUser(name_complete, carrera, user_name, password, data?.originalname)
            .then((response) => {
                res.status(201).json({
                    message: `user created succesfuly with id: ${response.id}`,
                    user: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

}

const login = async (req, res) => {
    const { user_name, password } = req.query;
    const user = await Users.findOne({
        where: {
            user_name: user_name,
        },
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        }
    })



    const verificarPassword = (password1) => {
        return bcrypt.compareSync(password1, user.password)
    }


    if (!user_name && !password) {
        return res.status(400).json({ message: 'data not found' })
    } else if (
        !user_name ||
        !password

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                user_name: "string",
                password: 'string'
            },
        });
    } else if (!user) {
        return res.status(400).json({
            message: 'No existe el usuario'
        });
    } else if (await !verificarPassword(password)) {
        return res.status(400).json({
            message: 'password incorret'
        });
    } else {
        const response = getSession(user_name)
            .then((response) => {
                res.status(200).json({
                    message: `user has been successfully logged in`,
                    user: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const getById = (req,res)=>{
    const { id } = req.query;
    if(!id){
        return res.status(400).json({ message: 'Data Not Found' })
    }else{
        const response = getUserById(id)
            .then((response) => {
                res.status(200).json({
                    message: `user has been recovered `,
                    user: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const editUserhttp = (req,res)=>{
    const {user_name,id} = req.body;
    const data = req.file;
    if(!user_name && !id ){
        return res.status(400).json({ message: 'Data Not Found' })
    }else if(!user_name || !id ){
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                user_name: "string",
                id: 'uuid',
            },
        });
    }
    const response = editUser(user_name,id,data?.originalname)
        .then((response) => {
            res.status(201).json({ 
                message: `user has been successfully edited`,
                user: response
            })
        })
        .catch(err=> {
            console.log(err)
        }) 
};



module.exports = {
    create,
    login,
    editUserhttp,
    getById
}