var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

// User Schema
var UserSchema = mongoose.Schema({
	firstname : String,
	lastname : String,
	username : String,
	email : String,
	password : String,
	gender : String,
	blog_title:Array,
	blog_content:Array
	
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);

