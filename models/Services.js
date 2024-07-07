const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")
const { Users } = require('./Usuario.js')

const Services = db.define('Services',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    route_Bus:{
        type:DataTypes.STRING
    },
    userId:{
        type: DataTypes.UUID,
        references: {
            model: "Users",
            key: "id"
        },
        allowNull:false,
    }})

    Services.belongsTo(Users, {
        foreignKey: 'userId',
        as: 'user'  // defining an alias is optional but useful for clarity in joins
    });

module.exports ={
    Services
}