const express = require('express');
const questions = require('../models/Questions');
const AllQuetions=async(req,res)=>{
    const que= await questions.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render("SelectQuestions",{que})
}
module.exports = {AllQuetions}