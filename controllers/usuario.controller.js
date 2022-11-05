const {Usuario} = require("../models/Usuario.js")




const createUser = async (data) => {

    const newUser = await Usuario.create({
        nombre: data.nombre,
        cedula: data.cedula,
        correo: data.correo,
        direccion: data.direccion
    })
    return newUser
}


module.exports = {
    createUser
}