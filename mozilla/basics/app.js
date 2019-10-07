const express = require('express')

const square = require('./square')
const wiki = require('./routes/wiki')

const logger = require('morgan')

const app = express()

app.use(logger('dev'))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/square/:width',(req,res)=>{
    res.json({
            "area":square.area(req.params.width),
            "perimeter": square.perimeter(req.params.width)
    })
})

app.use('/wiki',wiki)

app.all('/secret',(req,res,next)=>{
    console.log('Accessing the secret section')
    res.send( "acessing the secret using " + req.method + "http method")
    next()
})

//error handling
// app.use((err,req,res,next)=>{
//     console.log(err.stack)
//     res.status(500).send('Something broke!')
  
// })

app.listen(3000,()=>{
    console.log('Example app running of port 3000')
})