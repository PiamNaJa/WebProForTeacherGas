const   express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require('mongoose'),
        passport = require('passport'),
        localStrategy = require('passport-local'),
        flash  = require('connect-flash'),
        methodOverride = require('method-override'),
        Print = require('./models/print'),
        Comment = require('./models/comment'),
        User = require('./models/user'),
        sendDB = require('./seeds.js');

const   indexRoutes = require('./routes/index'),
        printRoutes = require('./routes/prints'),
        commentRoutes = require('./routes/comments');

mongoose.connect('mongodb://localhost/GracePrint'); // เชื่อม Database
app.set("view engine" ,"ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('_method'));
// sendDB();
app.use(require('express-session')({
    secret: "secret word",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use('/', indexRoutes);
app.use('/prints', printRoutes);
app.use('/prints/:id/comments', commentRoutes);

app.listen(3000, function(){
    console.log("Activated");
});