const express = require('express');
const Questionpaper = require('../models/Questionpaper');
const questions = require('../models/Questions');
const AllQuetions=async(req,res)=>{
    const que= await questions.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render("SelectQuestions",{que})
}
const selectedquestions = async(req,res)=>{
    const{testname,timer,allquestions}=await req.body;
    const quep=await Questionpaper.create({
        testname,timer,allquestions
    }).catch(error=>console.log(error));
  
    res.redirect('success')
}
module.exports = {AllQuetions,selectedquestions}