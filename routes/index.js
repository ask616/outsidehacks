module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs',{loggedIn:req.isAuthenticated()}); // load the index.ejs file
	});

	app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));

	app.get('/auth/facebook/authenticate', passport.authenticate('facebook',{
		successRedirect:'/map',
		failureRedirect:'/'
	}));


	function isLoggedIn(req,res,next){
		if(req.isAuthenticated())
			return next();

		res.redirect('/');
	}


}