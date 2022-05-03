const   express = require("express"),
        router = express.Router(),
        middleware  = require('../middleware');
        Song = require('../models/song');


router.get('/:id', middleware.isLoggedIn, (req,res)=>{ //$ne = not equal
    Song.find({'_id': {$ne : req.params.id}}).populate('artist').exec((err, otherSong)=>{ // Query all song expect spectified ID
        if(err)
        {
            console.log(err);
        }
        else
        {
            Song.findById(req.params.id).populate('artist').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    const randSong = otherSong.sort(() => Math.random() - 0.5).slice(0,5); //Shuffle Array Because Can't Use aggregate with populate
                    res.render('song/show.ejs', {song:foundSong, otherSong:randSong});
                }
            });            
        }
    });
});

module.exports = router;