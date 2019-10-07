// Pug is a templating engine for Express.
const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/first_template',(req,res)=>res.render('first_view'));

app.get('/dynamic_view',(req,res)=>{res.render('dynamic',{
        name:"tp",
        url:'http://www.google.com'
    });
});

app.get('/simple_view',(req,res)=>{res.render('simple',{
        user:{name: "Ayush", age: "20"}
    });
});

// link to signup
// app.get('/simple_view',(req,res)=>{res.render('simple',{
//     //user:{name: "Ayush", age: "20"}
// });
// });

app.listen(3000);



