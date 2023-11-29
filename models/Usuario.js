const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const bcrypt = require('bcrypt') 
const {v4: uuidv4} = require("uuid")

const Usuario = db.define('usuarios',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
    },
    name_complete:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    carrera:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }},{
        hooks: {
            beforeCreate: async function(usuario) {
                const salt = await bcrypt.genSalt(10)
                usuario.password = await bcrypt.hash(usuario.password, salt)
            }
        }
    })

    //metodo personalizado

    Usuario.prototype.verificarPassword = function(password) {
        return bcrypt.compareSync(password, this.password)
    }

module.exports ={
    Usuario
}