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
    }

})

module.exports ={
    Usuario
}