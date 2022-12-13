const express = require("express");
const server = express();

//Cors corss origin resource sharing
//To Relax the secuirites of API's


const cors = require("cors")

//BodyParser ismiddleware for handling HTTP requests
const bodyParser = require("body-parser");
const{gettodo,addtodo,deletetodo,updatetodo} = require("./src/controllers")
const mongoose = require("mongoose");



var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.use(bodyParser.json())
server.use(cors());
server.use(express.json());
mongoose.connect("mongodb://localhost:27017/todo")
mongoose.connection.on("connected",() =>{
    console.log("Database Connected");
})

mongoose.connection.on("Error",() =>{
    console.log("Database Not Connected");
})

server.get("/gettodo",gettodo)            //Get is a method for accessing value in compass 
server.post("/addtodo",addtodo)           //To add data in todo file through postman
server.delete("/deletetodo",deletetodo)   //For deleting a TODO
server.post("/updatetodo",updatetodo)     // For updating a TODO

server.listen(5000,() =>{
    console.log("Server started at port 5000")
})
