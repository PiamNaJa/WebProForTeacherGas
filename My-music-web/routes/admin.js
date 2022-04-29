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
    let artist = req.body.artist.trim();
    let lyric = req.body.lyric.trim();
    let newSong;
    if(req.body.album)
    {
        let album = req.body.album.trim();
        newSong = {image : image, name : name, genre : genre, artist : {_id : artist}, album : {_id : album}, lyric : lyric};
    }
    else
    {
        newSong = {image : image, name : name, genre : genre, artist : {_id : artist}, lyric : lyric};
    }
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
                            res.render('song/alldata.ejs', {
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