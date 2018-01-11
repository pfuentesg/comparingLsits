'use strict';
const list=require('../models/list')

function findList(req,res) {
    list.find({}).exec().then(data=>{
      res.status(200).send({data})  
    })}

function saveList(req,res){
    list.findOneAndUpdate(req.body._id, req.body)
        .exec()
        .then(query=>res.status(200).send(query))
   
}

module.exports={
    findList,
    saveList
}