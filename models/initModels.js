const Usuarios = require('./Usuario.js')

const initModels = () => {
    Usuarios.hasMany(Usuarios)
}

module.exports = initModels;