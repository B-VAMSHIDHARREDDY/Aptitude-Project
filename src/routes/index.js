const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const{homepage,adlogin,stu,alogin,sturegister,savestu}=require('../controllers/UserController');

var app=express();
var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded() ); 

// router.get('/',(req,res)=>{
//     res.render('home');
// })
router.get('/',homepage);

       
// router.get('/adminlogin',(req,res)=>{
//     res.render('adminlogin');
// })
router.get('/adminlogin',adlogin);


// router.get('/student',(req,res)=>{
//     res.render('student');
// });
router.get('/student',stu);

router.post('/adminlogin',alogin);
// router.post('/adminlogin',(Req, Res)=> {
//     var username = Req.body.name;
//     var password = Req.body.password;

//     if (username=='admin' && password == 'vamshi') {
//            // do something here with a valid login
//             Res.render('adminhome');
//     } else { 
//         Res.redirect('adminlogin')
//            // user or password doesn't match
//     }
// });
router.get('/studentRegister',sturegister)
// router.get('/StudentRegister',(req,res)=>{
//     res.render('StudentRegister')
// })
router.post('/savestudent',savestu);

module.exports = router;