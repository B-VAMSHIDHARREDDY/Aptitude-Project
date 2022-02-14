const Sequelize = require('sequelize');
const db = require('../../db');


module.exports =db.define('Questions',{
     id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
    testname:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    questions:{  
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    time:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:false
    }
    
})