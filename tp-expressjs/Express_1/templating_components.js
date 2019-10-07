// Pug is a templating engine for Express.
const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/components',(req,res)=>{
    res.render('content');
});

app.listen(3000);

//include can also be used to include plaintext, css and JavaScript.

