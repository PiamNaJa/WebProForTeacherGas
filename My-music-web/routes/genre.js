const   express = require("express"),
        router = express.Router(),
        Song = require('../models/song');

router.get('/', (req,res)=>{
    Song.distinct("genre", (err, foundGenre)=>{ //หา genre ของเพลงแบบ ไม่ซ้ำ
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("genre/all.ejs" , {genres:foundGenre});
        }
    });
});

router.get('/:title', (req,res)=>{
    Song.find({genre : req.params.title}).populate('artist').exec((err, foundSong)=>{ //หา genre ของเพลงแบบ ไม่ซ้ำ
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("genre/show.ejs" , {songs:foundSong, title:req.params.title});
        }
    });
});
module.exports = router;