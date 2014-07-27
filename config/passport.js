var FacebookStrategy = require("passport-facebook").Strategy;


var User = require("../app/models/user");

var configAuth = require("./auth");

module.exports=function(passport){
	//serialize
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	//deserialize
	passport.deserializeUser(function(id,done){
		User.findById(id,function(err,user){
			done(err,user);
		});
	});

	//facebook strategy
	passport.use(new FacebookStrategy({
		clientID:configAuth.facebookAuth.clientID,
		clientSecret:configAuth.facebookAuth.clientSecret,
		callbackURL:configAuth.facebookAuth.callbackURL
	},

	function(token,refresthToken,profile,done){
		process.nextTick(function(){
			//save shit to firebase
		});
	}));
};