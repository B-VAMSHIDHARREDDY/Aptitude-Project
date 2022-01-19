const sequelize = require('sequelize');
const db = new sequelize('nodeproject','root','Vamshi@143',{
    host:"127.0.0.1",
    dialect:"mysql"
});

module.exports = db;

