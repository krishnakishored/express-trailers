// To get started install the body-parser(for parsing JSON and url-encoded data) and multer(for parsing multipart/form data) middleware.
const express = require('express');
const bodyParser = require('body-parser');
const multer= require('multer');
const upload = multer();

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('form');
});

//for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

//After importing the body parser and multer, we will use the body-parser for parsing json and x-www-form-urlencoded header requests, 
//while we will use multer for parsing multipart/form-data.

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("received your POST request");
});

// The req.body object contains your parsed request body. 
//To use fields from that object, just use them like normal JS objects.
app.listen(3000);
