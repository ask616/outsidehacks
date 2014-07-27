var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var userScheme = mongoose.Schema({

	name:String,
	email:String,
	facebook:{
		id:String,
		token:String
	}
	
});


userScheme.methods.generateHash=function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

userScheme.methods.validatePassword=function(password){
	return bcrypt.compareSync(password,this.password);
};

module.exports=mongoose.model("User",userScheme);