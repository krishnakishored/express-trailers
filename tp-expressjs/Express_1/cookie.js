const express = require('express');
const app = express();
// cookie-parser is a middleware which parses cookies attached to the client request object.
const cookierParser = require('cookie-parser');
app.use(cookierParser());

// cookie-parser parses Cookie header and populates req.cookies with an object keyed by the cookie names.

app.get('/',(req,res)=>{
    res.cookie('name','express').send('cookie set');//Sets name = express
    console.log('Cookies: ', req.cookies);//The browser also sends back cookies every time it queries the server. 
    
    //Expires after 360000 ms from the time it is set.
    // res.cookie(name, 'value', {expire: 360000 + Date.now()}); 
    //This cookie also expires after 360000 ms from the time it is set.
    //res.cookie(name, 'value', {maxAge: 360000});
    //Another way to set expiration time is using 'maxAge' property. Using this property, we can provide relative time instead of absolute time. 
});

app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    console.log('Cookies: ', req.cookies)
    res.send('cookie foo cleared');
 });
 
 //TODO:


app.listen(3000);


/**
 * Cookies are simple, small files/data that are sent to client with a server request and stored on the client side. 
 * Every time the user loads the website back, this cookie is sent with the request. This helps us keep track of the user’s actions.
 * The following are the numerous uses of the HTTP Cookies −
 * Session management
 * Personalization(Recommendation systems)
 * User tracking

 */