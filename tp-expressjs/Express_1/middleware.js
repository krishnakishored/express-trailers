// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
const express = require('express');
const app = express();

//Middleware function to log request protocol - This is called for every request on the server
/*
app.use((req,res,next)=>{
    console.log("A new request received at "+Date.now());       
    next();//This function call is very important. 
    //It tells that more processing is required for the current request and is in the next middleware
});
*/

//placed after middleware function
app.get('/',(req,res)=>{res.send("hello middleware@ "+ Date.now());});


app.use('/things', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
 });

//Order of Middleware Calls
app.use('/things',(req,res,next)=>
{
    console.log('titles');
    next();
});

app.use('/things',(req,res,next)=>{
    console.log('intermission');
    next();
});

app.use('/things',(req,res,next)=>{
    console.log('the end');
    next();
});



// Route handler that sends the response
//placed after middleware function

app.get('/things',(req,res)=>{res.send('Things@'+ Date.now());});

app.listen(3000);