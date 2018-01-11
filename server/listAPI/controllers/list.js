'use strict';
const list=require('../models/list')

function findList(req,res) {
    list.find({}).exec().then(data=>{
        console.log(data)
      res.status(200).send({data})  
    })}

function saveList(req,res){
    console.log("holii")
}

module.exports={
    findList,
    saveList
}