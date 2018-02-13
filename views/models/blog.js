var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    
    title:String,
    content:String
    
});

module.exports = mongoose.model("blog",blogSchema);