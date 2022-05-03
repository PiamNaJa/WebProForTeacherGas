const   express = require("express"),
        router = express.Router(),
        Album = require('../models/album'),
        Artist = require('../models/artist'),
        Song = require('../models/song');


router.get('/', (req,res)=>{
    Song.find({}).populate('album artist').sort({release : 1}).exec((err, foundSong)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Artist.find({}).sort({name : 1}).exec((err, foundArtist)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Album.find({}).populate('artist').sort({name:1}).exec((err, foundAlbum)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            res.render('admin/index.ejs', {
                                                            songs: foundSong,
                                                            artists : foundArtist,
                                                            albums : foundAlbum
                                                          });
                        }
                    });
                }
            });
        }
    });
});

router.post('/song/new', (req,res)=>{
    let image = req.body.image.trim();
    let name = req.body.name.trim();
    let genre = ToTitleCase(req.body.genre.trim());
    let artistname = req.body.artist.trim();
    let lyric = req.body.lyric.trim();
    let newSong = {image : image, name : name, genre : genre, lyric : lyric};
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

router.get('/song/new', (req,res)=>{
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

router.get('/song/all', (req,res)=>{
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

router.put('/song/:id', (req, res)=>{
    Artist.findOne({name: req.body.artistname},(err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Album.findOne({name: req.body.albumname}, (err, foundAlbum)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    req.body.song.artist = foundArtist._id;
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
            })
        }
    });
});

router.delete('/song/:id', (req, res)=>{
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

router.get('/song/:id/edit', (req, res)=>{
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

router.post('/artist/new', (req,res)=>{
    let image = req.body.image.trim();
    let name = ToTitleCase(req.body.name.trim());
    let newArtist = {image : image, name : name};
    Artist.create(newArtist, (err, newlyAdded)=>{
        if(err)
        {
            req.flash('err', err.message);
            return res.redirect('back');
        }
        else
        {
            req.flash('success', 'Artist : ' + newlyAdded.name + ' is Added')
            res.redirect("back");
        }
    });
});

router.get('/artist/new', (req,res)=>{
    res.render('artist/new.ejs');
});

router.get('/artist/all', (req,res)=>{
    Artist.find({}).sort({name : 1}).exec((err, foundArtist)=>{
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

router.put('/artist/:id', (req, res)=>{
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

router.delete('/artist/:id', (req, res)=>{
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

router.get('/artist/:id/edit', (req, res)=>{
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

router.get('/album/new', (req,res)=>{
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

router.post('/album/new', (req,res)=>{
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

router.get('/album/all', (req,res)=>{
    Album.find({}).populate('artist').sort({name : 1}).exec((err, foundAlbum)=>{
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

router.put('/album/:id', (req, res)=>{
    Artist.findOne({name : req.body.artistname}, (err, foundArist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            req.body.album.artist = foundArist._id;
            Album.findOneAndUpdate(req.params.id, req.body.album, (err)=>{
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

router.delete('/album/:id', (req, res)=>{
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

router.get('/album/:id/edit', (req, res)=>{
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