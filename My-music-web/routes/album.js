const   express = require("express"),
        router = express.Router(),
        Album = require('../models/album'),
        Artist = require('../models/artist'),
        Song = require('../models/song');



router.get('/new', (req,res)=>{
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

router.post('/new', (req,res)=>{
    let image = req.body.image.trim();
    let name = req.body.name.trim();
    let artist = req.body.artist.trim();
    let newAlbum = {image : image, name : name, artist : {_id : artist}};    
    Album.create(newAlbum, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/song/new');
        }
    });
});

router.get('/all', (req,res)=>{
    res.render('album/all.ejs');
});
router.get('/:id', (req,res)=>{
    Album.findById(req.params.id, (err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Song.find({"album": {"_id" : foundAlbum._id}}).populate('artist album').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('album/show.ejs', {song:foundSong, album: foundAlbum});
                }
            });
        }
    });
});

module.exports = router;