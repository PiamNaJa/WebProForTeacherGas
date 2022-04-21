const express       = require('express'),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      localStrategy = require('passport-local'),
      User          = require('./models/user'),
      sendDB        = require('./seeds.js');


const   indexRoutes  = require('./routes/index'),
        songRoutes   = require('./routes/song'),
        artistRoutes = require('./routes/artist');

mongoose.connect('mongodb://localhost/Kmusic'); // เชื่อม Database
app.set("view engine" ,"ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended : true}));
// sendDB();
app.use(require('express-session')({
    secret: "secret word",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});


app.use('/', indexRoutes);
app.use('/song', songRoutes);
app.use('/artist', artistRoutes);

app.listen(3000, function(){
    console.log("Kmusic Activated");
});
