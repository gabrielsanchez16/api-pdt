const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")
const { Users } = require('./Usuario.js');

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
    userId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: {
            model: 'Users', // Reference the table name directly
            key: 'id'
        }
    },
    postId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Message.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user'  // defining an alias is optional but useful for clarity in joins
});

module.exports = {
    Message
}