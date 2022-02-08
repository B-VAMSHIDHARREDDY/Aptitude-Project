const sequelize = require('sequelize');
const db = new sequelize('OAT','root','',{
    host:"127.0.0.1",
    dialect:"mysql"
});

module.exports = db;

