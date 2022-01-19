const Sequelize = require('sequelize');
const db = require('../../db');


module.exports = define('User',{
     id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    
    password:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    number:{
        type:Sequelize.NUMBER,
        allowNull:false,
        unique:true
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
    
})