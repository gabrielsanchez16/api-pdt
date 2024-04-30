const { createUser, getSession, editUser } = require('../controllers/usuario.controller')
const { Usuario } = require("../models/Usuario")
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
    const user = await Usuario.findOne({
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


const editUserhttp = (req,res)=>{
    const {user_name,id} = req.body;
    const response = editUser(user_name,id)
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
    editUserhttp
}