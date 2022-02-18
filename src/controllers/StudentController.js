
const express = require('express');
const User = require('../models/User');
const Question = require('../models/Questions');
const router = express.Router();
const connection= require('../../db');

const stlogin=async(req,res)=>{
        await res.render('stulogin');
    }
const slogin=async(req,res,next)=>{
    // const user = await User.findOne({
    //     where: { username:req.body.username }}).catch(error=>console.log(error))      
    //   console.log(user.username)
    //   console.log(user.password)
    //     var uname = req.body.username;
    //     var pword = req.body.password;
    //     if (user.username==uname && user.password==pword)
    //     {
    //        await  res.render('StudentHome')
    //     }
    //     else{
    //         //  res.redirect('stulogin')
    //         res.send("Login Failed : please enter correct username and password")
    //     }
    var username = req.body.username;
    var password = req.body.password;
    const user=await User.findAll({
         where: { username: username,password:password } 
    }).catch(error=>console.log(error))
    if(user==""){
        res.send("Login Failed : please eneter valid login creadentials")
    }else{
       await res.render("StudentHome");
    }  
}

module.exports = {stlogin,slogin}