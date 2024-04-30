const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")

const Post = db.define("Posts",{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        allowNull:false
    },
    info:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    likes:{
        type:DataTypes.INTEGER,
    },
    user_id:{ 
        type: DataTypes.UUID,
        references: {
            model: "Users",
            key: "id"
        },
        allowNull: false
    },
    carrera:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url_image:{
        type:DataTypes.STRING
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    Post
}

