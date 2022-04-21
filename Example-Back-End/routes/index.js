const   express = require("express"),
        router = express.Router(),
        passport = require('passport'),
        User = require('../models/user');

router.get("/", function(req,res)
{
    res.render("landing.ejs");
});

router.get("/register", function(req, res){
    res.render('register.ejs');
});

router.post("/register", function(req, res){
    let newUser = new User({username : req.body.username})
    User.register(newUser, req.body.password, function(err){
        if(err)
        {
            req.flash('error', err.message);
            return res.redirect("/register");
        }
        else
        {
            passport.authenticate('local')(req, res, function(){
                req.flash('success', 'Welcome to GracePrint '+ User.username)
                res.redirect('/prints');
            })
        }
    });
});

router.get("/login", function(req, res){
    res.render('login.ejs');
});

router.post("/login", passport.authenticate('local',{
    successRedirect: '/prints',
    failureRedirect: '/login',
    successFlash: true,
    failureFlash: true,
    successFlash : 'Successfully login',
    failureFlash : 'Invalid username or password'
    }), function(req,res){

});

router.get("/logout", function(req, res){
    req.logout();
    req.flash('success', 'Log you out successfully');
    res.redirect('/');
});

module.exports = router;