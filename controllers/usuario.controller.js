const {Usuario} = require("../models/Usuario.js")




const createUser = async (nombre,cedula,correo,direccion,nro_vuelo,cantidad_ticket,precio,origen,destino) => {

    const newUser = await Usuario.create({
        nombre,
        cedula,
        correo,
        direccion,
        nro_vuelo,
        cantidad_ticket,
        precio,
        origen,
        destino
    })
    return  newUser
}


module.exports = {
    createUser
}