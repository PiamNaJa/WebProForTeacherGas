const   express     = require("express"),
        router      = express.Router(),
        User        = require('../models/user'),
        Song        = require('../models/song'),
        Artist      = require('../models/artist'),
        Album       = require('../models/album'),
        middleware  = require('../middleware');

router.get('/:id', middleware.isLoggedIn, (req,res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        if(err)
        {
            req.flash('err', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            Song.find({ _id: { $in: foundUser.favsong } }).populate('album artist').exec((err, foundSong)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    foundUser.favsong = foundSong;
                    res.render("user/show.ejs", {user : foundUser});
                }
            });
        }
    });
});

router.get('/:id/addfavsong/:song_id', middleware.isLoggedIn, (req,res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        if(err)
        {
            req.flash('err', 'There is Something Wrong');
            return res.redirect('back');
        }
        else
        {
            Song.findById(req.params.song_id, (err, foundSong)=>{
                if(err)
                {
                    req.flash('err', 'There is Something Wrong');
                    return res.redirect('back');
                }
                else
                {
                    foundUser.favsong.push(foundSong);
                    foundUser.save();
                    req.flash('success', 'Add to favorite song successfully');
                    res.redirect('back');
                }
            })
        }
    });
});

module.exports = router;