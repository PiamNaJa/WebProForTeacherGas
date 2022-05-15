const   express     = require("express"),
        router      = express.Router(),
        fs          = require('fs'),
        User        = require('../models/user'),
        Song        = require('../models/song'),
        Artist      = require('../models/artist'),
        Album       = require('../models/album'),
        Playlist       = require('../models/playlist'),
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

router.get('/:id', middleware.isLoggedIn, (req,res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        if(err)
        {
            req.flash('error', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            Playlist.find({owner : req.user._id}).populate('songs').exec((err, foundPlaylist)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Song.find({ _id: { $in: foundUser.favsong } }).populate('album artist').exec((err, foundSong)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            foundUser.favsong = foundSong;
                            res.render("user/show.ejs", {user : foundUser, playlists : foundPlaylist});
                        }
                    });
                }
            });
        }
    });
});

router.put('/:id', middleware.isLoggedIn, upload.single('profileImage'), (req,res)=>{
    if(req.file)
    {
        req.body.user.profileImage = '/upload/profile/' + req.file.filename;
    }
    User.findByIdAndUpdate(req.params.id, req.body.user, (err, foundUser)=>{
        if(err)
        {
            req.flash('error', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            req.flash('success', 'Edit Profile Successfully.');
            res.redirect('back');
        }
    });
});

router.put('/addfavsong/:song_id', middleware.isLoggedIn, (req,res)=>{
    User.findById(req.user._id, (err, foundUser)=>{
        if(err)
        {
            req.flash('error', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            Song.findById(req.params.song_id, (err, foundSong)=>{
                if(err)
                {
                    req.flash('error', 'There is Something Wrong');
                    return res.redirect('back');
                }
                else
                {
                    foundUser.favsong.push(foundSong);
                    foundSong.fav++;
                    foundSong.save();
                    foundUser.save();
                    res.redirect('back');
                }
            });
        }
    });
});

router.put('/removefavsong/:song_id', middleware.isLoggedIn, (req,res)=>{
    User.findById(req.user._id, (err, foundUser)=>{
        if(err)
        {
            req.flash('error', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            Song.findById(req.params.song_id, (err, foundSong)=>{
                if(err)
                {
                    req.flash('error', 'There is Something Wrong');
                    return res.redirect('back');
                }
                else
                {
                    foundUser.favsong.pull(foundSong);
                    foundSong.fav--;
                    foundSong.save();
                    foundUser.save();
                    res.redirect('back');
                }
            });
        }
    });
});

module.exports = router;