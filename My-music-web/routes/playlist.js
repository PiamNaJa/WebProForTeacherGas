const   express = require("express"),
        router = express.Router(),
        Playlist = require('../models/playlist'),
        Song = require("../models/song"),
        multer      = require('multer'),
        path        = require('path'),
        storage     = multer.diskStorage({
                        destination : (req,file, callback)=>{
                            callback(null,'./public/upload/playlist/');
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


router.get('/', middleware.isLoggedIn, (req, res)=>{
    Playlist.find({owner : req.user}, (err, foundPlaylist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('playlist/all.ejs' , {playlists : foundPlaylist})
        }
    });
});

router.get('/:id', middleware.checkPlaylistOwner, (req, res)=>{
    Playlist.findById(req.params.id, (err, foundPlaylist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Song.find({ _id: { $in: foundPlaylist.songs }}).populate('album artist').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('playlist/show.ejs' , {playlist : foundPlaylist, songs : foundSong})
                }
            });
        }
    });
});

router.get('/:id/song/:song_id', middleware.checkPlaylistOwner, (req, res)=>{
    Playlist.findOne({_id: req.params.id, songs: {$elemMatch: {_id : req.params.song_id}}}, (err, Found)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(Found);
            if(Found)
            {
                req.flash('err', 'This Song Already in ' + Found.name + ' Playlist');
                return res.redirect('back');
            }
            else
            {
                Playlist.findById(req.params.id, (err, foundPlaylist)=>{
                    if(err)
                    {
                        req.flash('err', err.message);
                        return res.redirect('back');
                    }
                    else
                    {
                        Song.findById(req.params.song_id, (err, foundSong)=>{
                            if(err)
                            {
                                req.flash('err', err.message);
                                return res.redirect('back');
                            }     
                            else
                            {
                                foundPlaylist.songs.push(foundSong);
                                foundPlaylist.save();
                                req.flash('success', 'Added To ' + foundPlaylist.name  + ' Playlist Successfully.');
                                res.redirect('back');
                            }           
                        });
                    }
                });
            }
        }
    });
});

router.post('/:song_id', middleware.isLoggedIn, upload.single('image'), (req, res)=>{
    Song.findById(req.params.song_id, (err, foundSong)=>{
        if(err)
        {
            req.flash('err', err.message);
            return res.redirect('back');
        }
        else
        {
            if(req.file)
            {
                req.body.playlist.image = '/upload/playlist/' + req.file.filename;
            }
            else
            {
                req.body.playlist.image = foundSong.image;
            }
            Playlist.create(req.body.playlist, (err, newlyAdded)=>{
                if(err)
                {
                    console.log(err);
                }           
                else
                {
                    newlyAdded.owner = req.user;
                    newlyAdded.songs.push(foundSong);
                    newlyAdded.save();
                    req.flash('success', 'Added To New Playlist Successfully.');
                    res.redirect('back');
                }     
            });
        }
    });
});

module.exports = router;