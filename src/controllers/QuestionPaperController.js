const express = require('express');
const papers = require('../models/Questionpaper');

const allexams=async(req,res)=>{
    const ae = await papers.findAll({
        raw:true
    }).catch(error=>console.log(error))
    // console.log(ae)
    await res.render('Exams',{ae})
}

module.exports = {allexams}