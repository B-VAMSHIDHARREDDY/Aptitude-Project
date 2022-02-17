
const express = require('express');
const User = require('../models/User');
const Question = require('../models/Questions');
const router = express.Router();
const connection= require('../../db');

const stlogin=async(req,res)=>{
        await res.render('stulogin');
    }
const slogin=async(req,res)=>{
    var uname = req.body.username;
    var pword = req.body.password;
    const users = await User.findAll({
        raw:true
    })
    users.forEach(element => {
        if (element.username==uname && element.password==pword)
        {
            res.render('StudentHome')
        }
        else{
            res.render('stulogin')
          
        }
    });
}

module.exports = {stlogin,slogin}