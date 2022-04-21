const   express = require("express"),
        router = express.Router(),
        bodyParser = require("body-parser"),
        Artist = require('../models/artist'),
        Song = require('../models/song');

router.post('/', (req,res)=>{
    let image = req.body.image;
    let name = req.body.name;
    let genre = ToTitleCase(req.body.genre);
    let artist = req.body.artist;
    let lyric = req.body.lyric;
    let newSong = {image : image, name : name, genre : genre, artist : {_id : artist}, lyric : lyric};
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
            res.render('song/new.ejs', {artist : foundArtist});
        }
    });
});

router.get('/:id', (req,res)=>{
    Song.findById(req.params.id).populate('artist').exec((err, foundSong)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('song/show.ejs', {song:foundSong});
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