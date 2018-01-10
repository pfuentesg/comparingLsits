'use strict';
const list=["Apple", "Orange", "Banana", "Blueberry", "Cherry", "Date", "Pea", "Pear"] 
function findList(req,res) {
    console.log("holi")
    return res.status(200).send({list})
};

module.exports={
    findList
}