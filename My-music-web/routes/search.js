const   express = require("express"),
        router = express.Router(),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');

let word;
router.post('/all', (req,res)=>{
    word = req.body.search.trim();
    res.redirect('/search/all');
});

router.get('/all', (req,res)=>{
    Song.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist').exec((err, foundSong)=>{ //case-insensitive search
        if(err)
        {
            console.log(err);
        }
        else
        {
            Artist.find({"name" : {"$regex" : word, $options:'i'}}, (err, foundArtist)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Album.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist').exec((err, foundAlbum)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            res.render("search/all.ejs",{
                                song:foundSong, 
                                artist:foundArtist, 
                                album:foundAlbum
                            });
                        }
                    });
                }
            });
        }
    });
});

router.get('/song', (req, res)=>{
    Song.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist album').exec((err, foundSong)=>{ //case-insensitive search
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/song.ejs",{song:foundSong});
        }
    });
});

router.get('/artist', (req, res)=>{
    Artist.find({"name" : {"$regex" : word, $options:'i'}}, (err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/artist.ejs",{artist:foundArtist});
        }
    });
});

router.get('/album', (req, res)=>{
    Album.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist').exec((err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/album.ejs",{album:foundAlbum});
        }
    });    
});

module.exports = router;