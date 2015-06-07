#!/usr/bin/env node
var mongodb = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vinit');

 var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

/* prompt> */ var Todo = mongoose.model('Todo', TodoSchema);

/* prompt> */ var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

/* prompt> */ todo.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(todo);
});

/*
var url = "mongodb://localhost:27017/vinit"

var mongoClient = mongodb.MongoClient;

mongoClient.connect(url, function(err,db){
    if (err) {
        console.log("unable to connect to mongodb server",err);
    }
    else{
    console.log("connection established to",url);
    db.close();
}
});*/