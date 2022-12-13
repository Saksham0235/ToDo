const express = require("express");
const {todo} = require("./models");

//Reading

const gettodo = async(request,response)=>{
    var _id = request.query.id;
    var data = request.query.name;
    if(_id){
        var Todos = await todo.findById(_id);    //todo ke andr search krni h particular id agr h to task found a jaega
    }
    else if(data){
        var Todos = await todo.find({taskName:data});  //To find  a todo by Name 
    }
    else{
        //Find is a method used to find a specific or single element from the array.
        var Todos = await todo.find();     
    }
    return response.json({status:"task found"});
}

 //In this we are adding new task 
const addtodo = async(request,response)=>{     
    console.log(request.body)                  // async is to increase wait time
    var oneStudent = await todo.create(request.body)         
    // Will give us message that the task added
    return response.json({status:"task added", todo:oneStudent}) 
    
}

const deletetodo = async(request,response) =>{
    var _id = request.query.id;
    var data = request.body;
    console.log(request.body)
    await todo.findByIdAndDelete(_id,data);
    return response.json({status:"task deleted"})
}

//{ new : true } will return the modified document rather than the original
//. updateOne doesn't have this option. If you need response as updated document use findOneAndUpdate.
const updatetodo = async(request,response) =>{
    var _id = request.query.id;
    var newdata = request.body;
    console.log(id,newdata);
    await todo.findByIdAndUpdate(_id,newData);
    const opts = {new:true, upsert: true};          
    return response.json({status:"task updated"})
}

module.exports={gettodo,addtodo,deletetodo,updatetodo}


