const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")

const Message = db.define("Messages",{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        allowNull:false
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    user_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    post_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    Message
}