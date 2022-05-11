const   express = require("express"),
        router = express.Router(),
        Playlist = require('../models/playlist'),
        Song = require("../models/song"),
        User = require("../models/user"),
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
                    User.findById(req.user._id, (err, foundUser)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            res.render('playlist/show.ejs' , {playlist : foundPlaylist, songs : foundSong, Userfavsong : foundUser.favsong})
                        }            
                    });
                }
            });
        }
    });
});

router.put('/:id', middleware.checkPlaylistOwner, upload.single('image'), (req,res)=>{
    if(req.file)
    {
        req.body.playlist.image = '/upload/playlist/' + req.file.filename;
    }
    Playlist.findByIdAndUpdate(req.params.id, req.body.playlist, (err, foundUser)=>{
        if(err)
        {
            req.flash('error', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            req.flash('success', 'Edit Playlist Successfully.');
            res.redirect('back');
        }
    });
});

router.delete('/:id', middleware.checkPlaylistOwner, (req, res)=>{
    Playlist.findByIdAndRemove(req.params.id, (err)=>{
        if(err)
        {
            req.flash('error', 'Something Went Wrong');
            res.redirect('back');
        }
        else
        {
            req.flash('success', 'Delete Playlist Successfully');
            res.redirect('/playlist');
        }
    })
})

router.post('/:song_id', middleware.isLoggedIn, upload.single('image'), (req, res)=>{
    Song.findById(req.params.song_id, (err, foundSong)=>{
        if(err)
        {
            req.flash('error', err.message);
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

router.post('/:id/song/:song_id', middleware.checkPlaylistOwner, (req, res)=>{
    Playlist.findOne({_id: req.params.id, songs: {$in: {_id : req.params.song_id}}}, (err, Found)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(Found)
            {
                req.flash('error', 'This Song Already in ' + Found.name + ' Playlist');
                return res.redirect('back');
            }
            else
            {
                Playlist.findById(req.params.id, (err, foundPlaylist)=>{
                    if(err)
                    {
                        req.flash('error', err.message);
                        return res.redirect('back');
                    }
                    else
                    {
                        Song.findById(req.params.song_id, (err, foundSong)=>{
                            if(err)
                            {
                                req.flash('error', err.message);
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

router.put('/:id/song/:song_id', middleware.checkPlaylistOwner, (req, res)=>{
    Playlist.findByIdAndUpdate(req.params.id, {$pull : {songs : req.params.song_id}}, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        else
        {
            req.flash('success', "Remove Song From This Playlist Successful");
            res.redirect('back');
        }
    })
});

module.exports = router;