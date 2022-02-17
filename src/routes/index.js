const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const{homepage,adlogin,stu,alogin,sturegister,savestu,AllStudentslist}=require('../controllers/UserController');
const{addquestion,AddQuestions,AllQuetions,selectedquestions}=require('../controllers/QuestionsController');
const{stlogin,slogin}=require('../controllers/StudentController');
var app=express();
var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded() ); 
router.get('/',homepage);
router.get('/adminlogin',adlogin);
router.get('/student',stu);
router.post('/adminlogin',alogin);
router.get('/studentRegister',sturegister)
router.post('/savestudent',savestu);
router.get('/addquestion',addquestion);
router.post('/AddQuetion',AddQuestions);
router.get('/AllStudent',AllStudentslist);
router.get('/SelectQuestions',AllQuetions);
router.post('/SelectQue',selectedquestions);
router.get('/stulogin',stlogin);
router.post('/stulogin',slogin)
module.exports = router;