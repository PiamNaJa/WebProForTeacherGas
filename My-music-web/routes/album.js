const   express = require("express"),
        router = express.Router(),
        Playlist = require('../models/playlist'),
        User = require('../models/user'),
        Album = require('../models/album'),
        Song = require('../models/song');

router.get('/all', (req,res)=>{
    Album.find({}).sort({name : 1}).populate('artist').exec((err, foundAlbum)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('album/all.ejs', {albums:foundAlbum});
        }
    })
    
});
router.get('/:id', (req,res)=>{
    let playlists, Userfavsong;
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
        User.findById(req.user._id, (err, foundUser)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                Userfavsong = foundUser.favsong;
            }            
        });
    }
    Album.findById(req.params.id).populate('artist').exec((err, foundAlbum)=>{
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
                    if(req.isAuthenticated())
                    {
                        res.render('album/show.ejs', {song:foundSong, album: foundAlbum, playlists : playlists, Userfavsong : Userfavsong});
                    }
                    else
                    {
                        res.render('album/show.ejs', {song:foundSong, album: foundAlbum});
                    }
                    
                }
            });
        }
    });
});

module.exports = router;