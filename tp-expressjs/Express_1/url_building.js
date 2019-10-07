const express = require('express');
const app = express();

// You can use the req.params object to access all the parameters you pass in the url.

app.get('/:id',(req,res)=>{res.send("The id you specified: "+req.params.id);});

app.get('/things/:name/:id',(req,res)=>{res.send('id: '+req.params.id+ ', and name: '+req.params.name);});

//Pattern Matched Routes

// You can also use regex to restrict URL parameter matching. Let us assume you need the id to be a 5-digit long number. 
app.get('/things/:id([0-9]{5})',(req,res)=>{res.send('id: '+req.params.id);});

//for other routes
app.get('*',(req,res)=>{res.send('sorry,this is an invalid URL');});

app.listen(3000);