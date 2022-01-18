# Aptitude-Project

Instalation Requirements:-

->  npm init -y
->  npm i express express-handlebars sequelize mysql2
->  npm i sequelize-cil -g
->  npm i nodemon -D

Changes---reqirements

go to ---> package.json   --- change this   

"scripts": {
    "test":"echo\"Error:no test specified\"&& exit 1"
  },
------to ----------------
  "scripts": {
    "start": "nodemon app.js"
  },
