const   express     = require("express"),
        router      = express.Router(),
        passport    = require('passport'),
        User        = require('../models/user'),
        Song        = require('../models/song'),
        Artist      = require('../models/artist'),
        Album       = require('../models/album'),
        multer      = require('multer'),
        path        = require('path'),
        storage     = multer.diskStorage({
                        destination : (req,file, callback)=>{
                            callback(null,'./public/upload/profile/');
                        },
                        filename: (req,file, callback)=>{
                            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                        }
                    }),
        imageFiler = (req,file,callback)=>{
            if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                return callback(new Error('Only jpg, jpeg, png, gif'),false);
            }
            callback(null, true);
        },
        upload = multer({storage: storage, fileFiler: imageFiler}),        
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
                                  randArtist    = allArtist.sort(() => Math.random() - 0.5).slice(0,6); //Shuffle Array Because Can't Use aggregate with populate
                                  randAlbum     = allAlbum.sort(() => Math.random() - 0.5).slice(0,6); //Shuffle Array Because Can't Use aggregate with populate
                            
                            res.render("landing.ejs", {
                                MostFavSong : MostFavSong,
                                NewSong : NewSong,
                                artist : randArtist,
                                album : randAlbum
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
    successFlash: true,
    failureFlash: true,
    successFlash : 'Successfully login',
    failureFlash : 'Invalid username or password'
    }), (req,res)=>{

});

router.get("/logout", (req, res)=>{
    req.logout();
    req.flash('success', 'Log Out Successfully')
    res.redirect('/');
});

router.get('/register', (req,res)=>{
    res.render("register.ejs");
});

router.post("/register", upload.single('profileImage'), (req, res)=>{
    req.body.profileImage = '/upload/profile/' + req.file.filename;
    let newUser = new User({username : req.body.username,
                            displayname : req.body.displayname,
                            profileImage : req.body.profileImage
    });
    if(req.body.adminCode === 'yep')
    {
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
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