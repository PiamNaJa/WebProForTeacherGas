const   express = require("express"),
        router = express.Router(),
        bodyParser = require("body-parser"),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');

router.post('/', (req,res)=>{
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
            res.redirect("/");
        }
    });
});

router.get('/new', (req,res)=>{
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

router.get('/:id', (req,res)=>{ //$ne = not equal
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