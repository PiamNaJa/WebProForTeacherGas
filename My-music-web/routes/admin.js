const   express = require("express"),
        router = express.Router(),
        middleware  = require('../middleware'),
        Album = require('../models/album'),
        Artist = require('../models/artist'),
        Song = require('../models/song'),
        User = require('../models/user'),
        multer      = require('multer'),
        path        = require('path'),
        storage     = multer.diskStorage({
                        destination : (req,file, callback)=>{
                            callback(null,'./public/upload/audio/');
                        },
                        filename: (req,file, callback)=>{
                            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                        }
                    }),
        audioFiler = (req,file,callback)=>{
            if(file.originalname.match(/\.(mp3|wav|ogg)$/i)){
                return callback(new Error('Only mp3'),false);
            }
            callback(null, true);
        },
        upload = multer({storage: storage, fileFiler: audioFiler});

router.get('/', middleware.isAdmin, (req,res)=>{
    res.render('admin/index.ejs');
});

router.post('/song/new', middleware.isAdmin, upload.single('audiofile'), (req,res)=>{
    let image = req.body.image.trim();
    let name = req.body.name.trim();
    let genre = ToTitleCase(req.body.genre.trim());
    let artistname = req.body.artist.trim();
    let lyric = req.body.lyric.trim();
    req.body.audiofile = '/upload/audio/' + req.file.filename;
    let newSong = {image : image, name : name, genre : genre, lyric : lyric, audio : req.body.audiofile};
    Artist.findOne({name : artistname}, (err, foundArist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            newSong.artist = foundArist._id;
            if(req.body.album)
            {
                let albumname = req.body.album;
                Album.findOne({name:albumname}, (err, foundAlbum)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        newSong.album = foundAlbum._id;
                        Song.create(newSong, (err, newlyAdded)=>{
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                req.flash('success', 'Song name : ' + newlyAdded.name + ' is Added')
                                res.redirect("back");
                            }
                        });
                    }
                });
            }
            else
            {
                Song.create(newSong, (err, newlyAdded)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        req.flash('success', 'Song name : ' + newlyAdded.name + ' is Added')
                        res.redirect("back");
                    }
                });
            }
            
        }
    })
});

router.get('/song/new', middleware.isAdmin, (req,res)=>{
    Artist.find({},(err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Album.find({}, (err, foundAlbum)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('song/new.ejs', {artist : foundArtist, album : foundAlbum});
                }
            });
        }
    });
});

router.get('/song/all', middleware.isAdmin, (req,res)=>{
    Song.find({}).populate('album artist').sort({release : 1}).exec((err, foundSong)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('song/alldata.ejs', {songs: foundSong});
        }
    });
});

router.put('/song/:id', middleware.isAdmin, upload.single('audiofile'), (req, res)=>{
    if(req.file)
    {
        req.body.song.audio = '/upload/audio/' + req.file.filename;
    }
    
    Artist.findOne({name: req.body.artistname},(err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            req.body.song.artist = foundArtist._id;
            if(req.body.albumname)
            {
                Album.findOne({name: req.body.albumname}, (err, foundAlbum)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        req.body.song.album = foundAlbum._id;
                        Song.findByIdAndUpdate(req.params.id, req.body.song, (err)=>{
                            if(err)
                            {
                                req.flash('error', err.message);
                                res.redirect('back');
                            }
                            else
                            {
                                req.flash('success', 'Edit Data Successfully');
                                res.redirect("/admin/song/all");
                            }
                        });
                    }
                });
            }
            else
            {
                Song.findByIdAndUpdate(req.params.id, {
                    image  : req.body.song.image,
                    name   : req.body.song.name,
                    genre  : req.body.song.genre,
                    lyric  : req.body.song.lyric,
                    artist : req.body.song.artist,
                    $unset : { album: ""}
                }, (err)=>{
                    if(err)
                    {
                        req.flash('error', err.message);
                        res.redirect('back');
                    }
                    else
                    {
                        req.flash('success', 'Edit Data Successfully');
                        res.redirect("/admin/song/all");
                    }
                });                
            }
        }
    });
});

router.delete('/song/:id', middleware.isAdmin, (req, res)=>{
    Song.findByIdAndRemove(req.params.id, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
            res.redirect('back');
        }
        else
        {
            req.flash('success', "Delete Successfully");
            res.redirect("/admin/song/all");
        }        
    });
});

router.get('/song/:id/edit', middleware.isAdmin, (req, res)=>{
    Song.findById(req.params.id).populate('artist album').exec((err, foundSong)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Artist.find({},(err, foundArtist)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Album.find({}, (err, foundAlbum)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            res.render('song/edit.ejs', {song:foundSong, artists : foundArtist, albums : foundAlbum});
                        }
                    });
                }
            });
        }
    })
})

router.post('/artist/new', middleware.isAdmin, (req,res)=>{
    let image = req.body.image.trim();
    let name = ToTitleCase(req.body.name.trim());
    let newArtist = {image : image, name : name};
    Artist.create(newArtist, (err, newlyAdded)=>{
        if(err)
        {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        else
        {
            req.flash('success', 'Artist : ' + newlyAdded.name + ' is Added')
            res.redirect("back");
        }
    });
});

router.get('/artist/new', middleware.isAdmin, (req,res)=>{
    res.render('artist/new.ejs');
});

router.get('/artist/all', middleware.isAdmin, (req,res)=>{
    Artist.find({}).exec((err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('artist/alldata.ejs', {artists: foundArtist});
        }
    });
});

router.put('/artist/:id', middleware.isAdmin, (req, res)=>{
    Artist.findByIdAndUpdate(req.params.id, req.body.artist, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
            res.redirect('back');
        }
        else
        {
            req.flash('success', 'Edit Data Successfully');
            res.redirect('/admin/artist/all');
        }
    });
});

router.delete('/artist/:id', middleware.isAdmin, (req, res)=>{
    Artist.findByIdAndRemove(req.params.id, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
            res.redirect('back');
        }
        else
        {
            Album.deleteMany({artist : {_id : req.params.id}},(err)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Song.deleteMany({artist : {_id : req.params.id}},(err)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            req.flash('success', "Delete Successfully");
                            res.redirect("/admin/artist/all");
                        }
                    });                           
                }
            });
        }        
    });
    
});

router.get('/artist/:id/edit', middleware.isAdmin, (req, res)=>{
    Artist.findById(req.params.id, (err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('artist/edit.ejs', {artist: foundArtist});
        }
    });
});

router.get('/album/new', middleware.isAdmin, (req,res)=>{
    Artist.find({}, (err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('album/new.ejs', {artist : foundArtist});
        }
    })
});

router.post('/album/new', middleware.isAdmin, (req,res)=>{
    let image = req.body.image.trim();
    let name = req.body.name.trim();
    let artist = req.body.artist.trim();
    let newAlbum = {image : image, name : name, artist : {_id : artist}};    
    Album.create(newAlbum, (err, newlyAdded)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            req.flash('success', 'Album : ' + newlyAdded.name + ' is Added')
            res.redirect('back');
        }
    });
});

router.get('/album/all', middleware.isAdmin, (req,res)=>{
    Album.find({}).populate('artist').exec((err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('album/alldata.ejs', {albums: foundAlbum});
        }
    });
});

router.put('/album/:id', middleware.isAdmin, (req, res)=>{
    Artist.findOne({name : req.body.artistname}, (err, foundArist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            req.body.album.artist = foundArist._id;
            Album.findOneAndUpdate({_id : req.params.id}, req.body.album, (err, foundAlbum)=>{
                if(err)
                {
                    req.flash('error', err.message);
                    res.redirect('back');
                }
                else
                {
                    req.flash('success', 'Edit Data Successfully');
                    res.redirect('/admin/album/all');
                }
            });
        }
    });
});

router.delete('/album/:id', middleware.isAdmin, (req, res)=>{
    Album.findByIdAndRemove(req.params.id, (err)=>{
        if(err)
        {
            req.flash('error', err.message);
            res.redirect('back');
        }
        else
        {
            Song.updateMany({album : req.params.id}, { $unset: { album: ""} }, (err)=>{
                if(err)
                {
                    req.flash('error', err.message);
                    res.redirect('back');
                }
                else
                {
                    req.flash('success', 'Delete Data Successfully');
                    res.redirect('/admin/album/all');
                }
            });
        }
    });
});

router.get('/album/:id/edit', middleware.isAdmin, (req, res)=>{
    Album.findById(req.params.id).populate('artist').exec((err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Artist.find({}, (err, foundArist)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('album/edit.ejs', {album : foundAlbum, artists : foundArist});
                }
            })
        }
    });
});

router.get('/user/all', middleware.isAdmin, (req, res)=>{
   User.find({}, (err, foundUser)=>{
       if(err)
       {
           console.log(err);
       }
       else
       {
        res.render('user/alldata.ejs', {users : foundUser});
       }
   });
});

router.put('/user/:id/', middleware.isAdmin, (req, res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            foundUser.isAdmin = foundUser.isAdmin? false : true;
            foundUser.save();
            req.flash('success', 'Change Permission Successfully');
            res.redirect('/admin/user/all');
        }
    });
 });

 router.delete('/user/:id/', middleware.isAdmin, (req, res)=>{
    User.findByIdAndDelete(req.params.id, (err,foundUser)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            req.flash('success', 'Delete ' + foundUser.username +  ' Successfully');
            res.redirect('/admin/user/all');
        }
    });
 });

module.exports = router;

function ToTitleCase(str) {
    let upper = true;
    let newStr = "";
    for (let i = 0, l = str.length; i < l; i++) {
      if (str[i] == " ") {
        upper = true;
          newStr += " ";
        continue;
      }
      newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase();
      upper = false;
    }
    return newStr;
}