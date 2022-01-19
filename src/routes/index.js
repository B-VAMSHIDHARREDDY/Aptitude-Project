const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

var app=express();
var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded() ); 

router.get('/',(req,res)=>{
    res.render('home');
})

router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin');
})

router.get('/student',(req,res)=>{
    res.render('student');
})
router.post('/adminlogin',(Req, Res)=> {
    var username = Req.body.name;
    var password = Req.body.password;

    if (username=='admin' && password == 'vamshi') {
           // do something here with a valid login
          
            Res.render('adminhome');
    } else { 
        Res.redirect('adminlogin')
           // user or password doesn't match
    }
});

router.get('/StudentRegister',(req,res)=>{
    res.render('StudentRegister')
})
module.exports = router;