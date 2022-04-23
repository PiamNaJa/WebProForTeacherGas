const   express = require("express"),
        router = express.Router(),
        Artist = require('../models/artist'),
        Song = require('../models/song');


router.post('/', (req,res)=>{
    let image = req.body.image;
    let name = ToTitleCase(req.body.name);
    let newArtist = {image : image, name : name};
    Artist.create(newArtist, (err, newlyAdded)=>{
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
    res.render('artist/new.ejs');
});
router.get('/:id', (req,res)=>{
    let otherArt;
    Artist.find({'_id': {$ne : req.params.id}},(err, allArtist)=>{
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
            Song.find({"artist": {"_id" : foundArtist._id}}).populate('artist').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('artist/show.ejs', {song:foundSong, artist: foundArtist, otherArt : otherArt});
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