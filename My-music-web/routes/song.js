const   express = require("express"),
        router = express.Router(),
        Playlist = require('../models/playlist'),
        User = require('../models/user'),
        Song = require('../models/song');

router.get('/:id', (req,res)=>{ //$ne = not equal
    let playlists,
        isFav;
    if(req.isAuthenticated())
    {
        Playlist.find({owner : req.user._id}, (err, foundPlaylist)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                playlists = foundPlaylist;
            }
        });
        User.findOne({ _id: req.user._id, favsong:  req.params.id }, (err, found)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                isFav = found? true : false ;
            }
        });
    }
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
                    if(req.isAuthenticated())
                    {
                        res.render('song/show.ejs', {song:foundSong, otherSong:randSong, playlists:playlists, isFav : isFav});
                    }
                    else
                    {
                        res.render('song/show.ejs', {song:foundSong, otherSong:randSong});
                    }
                    
                }
            });            
        }
    });
});

module.exports = router;