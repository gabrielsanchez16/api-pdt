const Usuarios = require('./Usuario.js')
const Posts = require("./Post.js")
const Messages = require("./Message.js")

const initModels = () => {
    Usuarios.hasMany(Usuarios)

    Usuarios.hasMany(Posts)
    Posts.belongsTo(Usuarios,{
        foreignKey: 'user_id'
    })

    Posts.hasMany(Messages)
    Messages.belongsTo(Posts)

    Usuarios.hasMany(Messages)
    Messages.belongsTo(Usuarios)
    
}

module.exports = initModels;