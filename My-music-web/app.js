const express       = require('express'),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      localStrategy = require('passport-local'),
      flash         = require('connect-flash'),
      methodOverride = require('method-override'),
      User          = require('./models/user'),
      sendDB        = require('./seeds.js');


const   indexRoutes  = require('./routes/index'),
        songRoutes   = require('./routes/song'),
        artistRoutes = require('./routes/artist'),
        searchRoutes = require('./routes/search'),
        albumRoutes  = require('./routes/album'),
        genreRoutes  = require('./routes/genre'),
        adminRoutes  = require('./routes/admin');

mongoose.connect('mongodb://localhost/Kmusic'); // เชื่อม Database
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

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});


app.use('/', indexRoutes);
app.use('/song', songRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.use('/search', searchRoutes);
app.use('/genre', genreRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, ()=>{
    console.log("Kmusic Activated");
});
