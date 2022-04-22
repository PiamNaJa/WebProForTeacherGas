const   express     = require("express"),
        router      = express.Router(),
        passport    = require('passport'),
        User        = require('../models/user'),
        Song        = require('../models/song'),
        Artist      = require('../models/artist'),
        Album       = require('../models/album'),
        middleware  = require('../middleware');

router.get('/', (req,res)=>{
    Album.find({}).populate('artist').exec((err, allAlbum)=>{
        if(err){console.log(err);}
        else
        {
            Artist.find({},(err,allArtist)=>{
                if(err){console.log(err);}
                else
                {
                    Song.find({}).populate('artist').exec((err, allSong)=>{
                        if(err){console.log(err);}
                        else
                        {
                            const MostFavSong   = allSong.sort((a, b) => a.fav < b.fav ? 1 : -1).slice(0,6), //เรียง Fav จากมากไปน้อย และเอา5อันดับแรก
                                  NewSong       = allSong.sort((a, b) => a.release < b.release ? 1 : -1).slice(0,6); //เรียง date จากล่าสุดไปนาน และเอา5อันดับแรก
                            
                                  console.log(NewSong[0].release);
                                  console.log(NewSong[1].release);
                            
                            res.render("landing.ejs", {
                                MostFavSong : MostFavSong,
                                NewSong : NewSong,
                                artist : allArtist,
                                album : allAlbum
                            });
                        }
                    });
                }
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

router.get('/favorite', middleware.isLoggedIn, (req,res)=>{
    res.render("favorite.ejs");
});

module.exports = router;