const express = require('express');
const User = require('../models/User');
const Question = require('../models/Questions');
const router = express.Router();

const homepage=async(req,res)=>{
     await res.render('home');
 }
 const adlogin=async(req,res)=>{
     await res.render('adminlogin');
 }
const stu=async(req,res)=>{
    await res.render('student');
}
const alogin=async(req,res)=>{
    var username = req.body.name;
    var password = req.body.password;

    if (username=='admin' && password == 'vamshi') {
           // do something here with a valid login
           await res.render('adminhome');
    } else { 
        await res.redirect('adminlogin')
           // user or password doesn't match
    }
}
const sturegister = async(req,res)=>{
    await res.render('StudentRegister');
}
const savestu=async(req,res)=>{
    const{username,firstname,lastname,email,password,number,address}=await req.body;
    const stu=await User.create({
        username,firstname,lastname,email,password,number,address
    }).catch(error=>console.log(error));
    console.log(stu);
    res.redirect('student')
}
const addquestion=async(req,res)=>{
    await res.render('addquestion');

}
const AddQuestions=async(req,res)=>{
    const{question,option1,option2,option3,option4,ans}=await req.body;
    const que=await Question.create({
        question,option1,option2,option3,option4,ans
    }).catch(error=>console.log(error));
    console.log("Sucees fully added");
    res.redirect('addquestion')
}
 module.exports = {homepage,adlogin,stu,alogin,sturegister,savestu,addquestion,AddQuestions}
