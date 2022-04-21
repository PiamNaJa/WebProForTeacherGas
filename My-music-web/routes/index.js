const   express = require("express"),
        router = express.Router(),
        passport = require('passport'),
        User = require('../models/user'),
        Artist = require('../models/artist'),
        Song = require('../models/song');



router.get('/', (req,res)=>{
    let artist;
    Artist.find({},(err,allArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            artist = allArtist;
        }
    })

    Song.find({}).populate('artist').exec((err, allSong)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            const MostFavSong   = allSong.sort((a, b) => a.fav < b.fav ? 1 : -1).slice(0,6), //เรียง Fav จากมากไปน้อย และเอา5อันดับแรก
                  NewSong       = allSong.sort((a, b) => a.release < b.release ? 1 : -1).slice(0,6); //เรียง date จากล่าสุดไปนาน และเอา5อันดับแรก
            
                  console.log(NewSong[0].release);
                  console.log(NewSong[1].release);
            
                res.render("home.ejs", {
                MostFavSong : MostFavSong,
                NewSong : NewSong,
                artist : artist
            });
        }
    });
    
});
router.get('/login', (req,res)=>{
    res.render("login.ejs");
});

router.post("/login", passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    }), function(req,res){

});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/register', (req,res)=>{
    res.render("register.ejs");
});

router.post("/register", function(req, res){
    let newUser = new User({username : req.body.username})
    User.register(newUser, req.body.password, (err)=>{
        if(err)
        {
            console.log(err);
            return res.redirect("/register");
        }
        else
        {
            passport.authenticate('local')(req, res, function(){
                res.redirect('/');
            })
        }
    });
});

module.exports = router;