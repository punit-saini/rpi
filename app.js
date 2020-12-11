const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("index");
});

app.get("/about-us",function(req,res){
    res.render("about");
});

app.get("/addmission-process",function(req,res){
    res.render("addmission-pro");
});

app.get("/contact-us",function(req,res){
    res.render("contact");
});

app.get("/courses",function(req,res){
    res.render("courses");
});

app.get("/our-faculty", function(req,res){
    res.render("faculty");
});

app.get("/online-addmission",function(req,res){
    res.render('add-form');
});

app.get("/online-registeration",function(req,res){
    res.render('online-addmission');
});





app.listen(process.env.PORT || 3000, function(){
    console.log("Server Started On Port 3000");
});