const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');
const { v4: uuidv4 } = require("uuid");
const { Users } = require('./Usuario.js');

const Post = db.define("post", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    info: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Default to 0 if not specified
    }, 
    userId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: {
            model: 'Users', // Reference the table name directly
            key: 'id'
        }
    },
    url_image: {
        type: DataTypes.STRING
    }
});

// Associations can also be defined here, outside of model definition, for clarity
Post.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user'  // defining an alias is optional but useful for clarity in joins
});

module.exports = {
    Post
};