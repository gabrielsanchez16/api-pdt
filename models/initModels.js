const Usuarios = require('./Usuario.js')
const Posts = require("./Post.js")
const Messages = require("./Message.js")
const Services = require("./Services.js")


const initModels = () => {
    

    // Usuarios.hasMany(Posts)
    // Posts.belongsTo(Usuarios)

    Usuarios.hasMany(Posts);
 
    Posts.hasMany(Messages)
    Messages.belongsTo(Posts)

    Usuarios.hasMany(Messages)
    Messages.belongsTo(Usuarios) 

 
    Usuarios.hasMany(TicketBus)
    Services.belongsTo(Usuarios)

}

module.exports = initModels;