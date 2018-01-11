const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const listSchema = new Schema({
   list:Array
});

//const Product = mongoose.model('Product', ProductSchema);
//module.exports = Product;

module.exports = mongoose.model('List', listSchema);