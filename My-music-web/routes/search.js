const   express = require("express"),
        router = express.Router(),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');

router.post('/', (req,res)=>{
    res.redirect('/search/'+req.body.search.trim()+'/all');
});

router.get('/:word/all', (req,res)=>{
    const word = req.params.word;
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
                                album:foundAlbum,
                                word : word
                            });
                        }
                    });
                }
            });
        }
    });
});

router.get('/:word/song', (req, res)=>{
    const word = req.params.word;
    Song.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist album').exec((err, foundSong)=>{ //case-insensitive search
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/song.ejs",{song:foundSong, word : word});
        }
    });
});

router.get('/:word/artist', (req, res)=>{
    const word = req.params.word;
    Artist.find({"name" : {"$regex" : word, $options:'i'}}, (err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/artist.ejs",{artist:foundArtist, word : word});
        }
    });
});

router.get('/:word/album', (req, res)=>{
    const word = req.params.word;
    Album.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist').exec((err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("search/album.ejs",{album:foundAlbum, word : word});
        }
    });    
});

module.exports = router;