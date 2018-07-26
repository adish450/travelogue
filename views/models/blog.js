var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    
    title: {
        type : String,
        required : 'Title cant be blank'
    },
    content: {
        type : String,
        required : 'Content cant be blank'
    },
    createdDate : {
        type : Date,
        default : Date.now
    }
    
    
});

module.exports = mongoose.model("blog",blogSchema);