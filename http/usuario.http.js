const {createUser} = require('../controllers/usuario.controller')

const create = (req,res) => {
    const {nombre,cedula,correo,direccion,nro_vuelo,cantidad_ticket,precio,origen,destino} = req.body;
    if (!nombre && !cedula && !correo && !direccion && !nro_vuelo && !cantidad_ticket && !precio && !origen && !destino ) {
        return res.status(400).json({ message: 'Data Not Found' })
    } else if (
        !nombre ||
        !cedula ||
        !correo ||
        !direccion ||
        !nro_vuelo ||
        !cantidad_ticket ||
        !precio ||
        !origen ||
        !destino 

    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                nombre: 'string',
                cedula: 3423424,
                correo: 'example@gmail.com',
                direccion: 'string',
                nro_vuelo: 3434,
                cantidad_ticket: 2,
                precio: '$23.000.00',
                origen: 'BOG',
                destino: 'CUC'
            },
        });
    } else {
        const response = createUser(nombre,cedula,correo,direccion,nro_vuelo,cantidad_ticket,precio,origen,destino)
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