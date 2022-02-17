'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
      question:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true
      },
      option1:{  
          type:Sequelize.STRING,
          allowNull:false,
          unique:false
      },
      option2:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:false
      },
      option3:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:false
      },
      
      option4:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:false
      },
      ans:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:false
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
     });
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('questions');
     
  }
};
