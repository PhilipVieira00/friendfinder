var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;
var path = path;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
