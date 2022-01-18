const express =require('express');
const exphbs =require('express-handlebars');

const app = express();
const port = process.env.PORT|| 1234;

const router=require('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('hbs', exphbs.engine({extname:".hbs"}));
app.set('view engine', 'hbs');
app.use('/',router);


app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`);
});

