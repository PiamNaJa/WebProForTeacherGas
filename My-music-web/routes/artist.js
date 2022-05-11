const   express = require("express"),
        router = express.Router(),
        Playlist = require('../models/playlist'),
        User = require('../models/user'),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');

router.get('/all', (req,res)=>{
    Artist.find({}).sort({name:1}).exec((err, allArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('artist/all.ejs', {allArtist:allArtist});
        }
    });
});
router.get('/:id', (req,res)=>{
    let otherArt, playlists, Userfavsong;
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
    Artist.find({'_id': {$ne : req.params.id}},(err, allArtist)=>{ //ne = not equal
        if(err)
        {
            console.log(err);
        }
        else 
        {
            otherArt = allArtist.sort(() => Math.random() - 0.5).slice(0,5); //Shuffle Array
        }
    });
    Artist.findById(req.params.id, (err, foundArtist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Song.find({"artist": {"_id" : foundArtist._id}}).populate('artist album').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    Album.find({"artist": {"_id" : foundArtist._id}}, (err, foundAlbum)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            if(req.isAuthenticated())
                            {
                                res.render('artist/show.ejs',
                                {
                                    song:foundSong,
                                    artist: foundArtist,
                                    otherArt : otherArt,
                                    album : foundAlbum,
                                    playlists : playlists,
                                    Userfavsong : Userfavsong
                                });
                            }
                            else
                            {
                                res.render('artist/show.ejs',
                                {
                                    song:foundSong,
                                    artist: foundArtist,
                                    otherArt : otherArt,
                                    album : foundAlbum
                                });                                
                            }
                        }
                    });
                }
            });
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