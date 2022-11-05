const {createUser} = require('../controllers/usuario.controller')

const create = (req,res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: 'Data Not Found' })
    } else if (
        !data.nombre ||
        !data.cedula ||
        !data.correo ||
        !data.direccion 
    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                nombre: 'string',
                cedula: 'int',
                correo: 'example@gmail.com',
                direccion: 'string'
            },
        });
    } else {
        const response = createUser(data)
            .then((response) => {
                res.status(201).json({ 
                    message: `user created succesfuly with id: ${response.id}`,
                    user: response })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };

}



module.exports = {
    create
}