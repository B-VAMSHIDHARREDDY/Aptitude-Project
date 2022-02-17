const express = require('express');
const Questionpaper = require('../models/Questionpaper');
const questions = require('../models/Questions');
const addquestion=async(req,res)=>{
    await res.render('addquestion');

}
const AddQuestions=async(req,res)=>{
    const{question,option1,option2,option3,option4,ans}=await req.body;
    const que=await questions.create({
        question,option1,option2,option3,option4,ans
    }).catch(error=>console.log(error));
    console.log("Sucees fully added");
    res.redirect('addquestion')
}
const AllQuetions=async(req,res)=>{
    const que= await questions.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render("SelectQuestions",{que})
}
const AllQuetions2=async(req,res)=>{
    const que= await questions.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render("AllQue",{que})
}
const selectedquestions = async(req,res)=>{
    const{testname,timer,allquestions}=await req.body;
    const quep=await Questionpaper.create({
        testname,timer,allquestions
    }).catch(error=>console.log(error));
  
    res.redirect('success')
}
module.exports = {AllQuetions,selectedquestions,addquestion,AddQuestions,AllQuetions2}