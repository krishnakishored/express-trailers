const express = require('express');
const app = express();

const bodyParser = require('body-parser');//This is used to parse the body of requests which have payloads attached to them.

//To parse URL encoded data
app.use(bodyParser.urlencoded({extended:false}));
//To parse json data
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');//It parses Cookie header and populate req.cookies with an object keyed by cookie names.
app.use(cookieParser())

//TODO: