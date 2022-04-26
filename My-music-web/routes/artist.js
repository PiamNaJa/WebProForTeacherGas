const   express = require("express"),
        router = express.Router(),
        Artist = require('../models/artist'),
        Album = require('../models/album'),
        Song = require('../models/song');


router.post('/new', (req,res)=>{
    let image = req.body.image.trim();
    let name = ToTitleCase(req.body.name.trim());
    let newArtist = {image : image, name : name};
    Artist.create(newArtist, (err, newlyAdded)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect("/song/new");
        }
    });
});

router.get('/new', (req,res)=>{
    res.render('artist/new.ejs');
});
router.get('/all', (req,res)=>{
    Artist.find({}, (err, allArtist)=>{
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
    let otherArt;
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
                            res.render('artist/show.ejs',
                            {
                                song:foundSong,
                                artist: foundArtist,
                                otherArt : otherArt,
                                album : foundAlbum
                            });
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