const   express = require("express"),
        router = express.Router(),
        Album = require('../models/album'),
        Song = require('../models/song');



router.get('/new', (req,res)=>{
    res.render('artist/new.ejs');
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