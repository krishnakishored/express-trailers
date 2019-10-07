const express = require('express');
const app = express();

const things = require('./things.js');

//app.get(route, callback)
app.get('/',(req,res)=>{ res.send('Hello index!'); });
// res.send() -  This function takes an object as input and it sends this to the requesting client. 

//app.method(path, handler)
app.get('/hello',(req,res)=>{ res.send('Hello world!'); });

app.post('/hello',(req,res)=>{res.send("You just called the post method at '/hello'\n")})

//A special method, all, is provided by Express to handle all types of http methods at a particular route using the same function.
app.all('/test',(req,res)=>{res.send("HTTP method doesn't have any effect on this route!")});

//The app.use function call on route '/things' attaches the things router with this route. 
//Now whatever requests our app gets at the '/things', will be handled by our things.js router.
//The '/' route in things.js is actually a subroute of '/things'
app.use('/things',things);



app.listen(3000);
//app.listen(port, [host], [backlog], [callback]])
