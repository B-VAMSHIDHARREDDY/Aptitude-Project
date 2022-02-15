const Sequelize = require('sequelize');
const db = require('../../db');
const Questions = require('./Questions');


module.exports =db.define('questionpaper',{
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
   
    timer:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:false
    },
    allquestions:{  
        type:Sequelize.JSON,
        allowNull:false,
    }
    
})