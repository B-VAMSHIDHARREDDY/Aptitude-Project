'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('users', { id: {
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
      type:Sequelize.STRING,
      allowNull:false,
      unique:true
  },
  number:{
      type:Sequelize.INTEGER,
      allowNull:false,
      unique:true
  },
  address:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true
     },});
     
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};
