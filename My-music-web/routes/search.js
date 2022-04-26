const   express = require("express"),
        router = express.Router(),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');


router.post('/', (req,res)=>{
    const word = req.body.search.trim();
    Song.find({"name" : {"$regex" : word, $options:'i'}}).populate('artist album').exec((err, foundSong)=>{ //case-insensitive search
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

module.exports = router;