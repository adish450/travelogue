var express         =   require('express'),
    app             =   express(),
    bodyParser      =   require('body-parser'),
    mongoose        =   require('mongoose'),
    User            =   require("./views/models/user"),
    passport        =   require('passport'),
    flash           =   require('connect-flash'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    LocalStrategy = require('passport-local').Strategy;



//mongoose.connect("mongodb://localhost/travelogue");
mongoose.connect("mongodb://Adish_450:Adish@ds125198.mlab.com:25198/travelogue_db");



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(passport.initialize()); 
app.use(passport.session());
app.use(flash());





app.use(require('express-session')({
    secret : "Adish",
    resave : false,
    saveUninitialized : false,
    
}));

passport.use(new LocalStrategy(User.authenticate()));


 // used to serialize the user for the session
    passport.serializeUser(User.serializeUser());

    // used to deserialize the user
    passport.deserializeUser(User.deserializeUser());


app.use(express.static('public'));
app.set("view engine","ejs");

//routes


app.get("/Login",function(req,res){
    res.render("login");
    
});




app.get("/Signup",function(req,res){
    
    res.render("signup");
    
});

app.get("/",function(req,res){
    res.render("index");
    
});

// we will use route middleware to verify this (the isLoggedIn function)
    /*app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });*/


app.get("/logout",function(req,res){
    
    req.logout();
    res.redirect("/");
});

// process the signup form

app.post('/Signup', function(req, res){
	
	

	User.register(new User({firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,gender:req.body.gender,username:req.body.username}),req.body.password,function(err,user){
	    
	    if(err){
	        console.log(err);
	        return res.render("signup");
	    }
	    
	    passport.authenticate("local")(req,res,function(){
	        
	        res.redirect("/users/" + req.user.username);
	   
	    });
	    
	    
	});
	
});	
	





app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
    
    
    
   
app.get("/users/:name",function(req,res){
    var name = req.params.name;
    console.log(name);
    User.findOne({"username":name},function(err,User){
       if(err)
       console.log(err);
        else
    res.render("profile",{name:name,User:User});    
    });
});


app.get("/users/:name/blog/:blog_title",function(req,res){
    var name = req.params.name;
    var blog_title = req.params.blog_title;
    console.log(req.ip);
    console.log(name);
    User.findOne({"username":name, "blog_title":blog_title},function(err,User){
       if(err)
       console.log(err);
        else{
            var pos = 0;
            for(var i=0;i<User.blog_title.length;i++){
                if(User.blog_title[i] === blog_title)
                pos= i;
            }
            res.render("blog",{name:name,blog_title:blog_title,blog_content:User.blog_content[pos],User:User});
        }
        
    });
    
});

app.post("/users/:name",function(req,res){

    
    User.update({username:req.params.name},{$push:{
        
        
        "blog_title": req.body.title,
        "blog_content": req.body.content
    }
    },function(err,blogs){
        if(err)
        console.log(err);        
        else
        res.redirect("back");
        
        
    });
    
    
});
app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("Server is running !");
});




// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()){
         next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/login');
}
