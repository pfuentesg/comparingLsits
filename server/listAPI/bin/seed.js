const mongoose = require("mongoose");
const list = require("../models/list");
const { dbURL } = require("./db");
mongoose.connect('mongodb://localhost/listDb');
const listToSave=[
  {  list:["Apple", "Orange", "Banana", "Blueberry", "Cherry", "Date", "Pea", "Pear"] }
]

list.create(listToSave, (err,entrie)=>{
    if(err){throw(err)}
    console.log("ok",entrie)
    mongoose.connection.close()
})