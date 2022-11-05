const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")

const Usuario = db.define('usuarios',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    cedula:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    correo:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull:false
    }

})

module.exports ={
    Usuario
}