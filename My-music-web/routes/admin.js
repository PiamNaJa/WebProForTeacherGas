const   express = require("express"),
        router = express.Router(),
        Album = require('../models/album'),
        Artist = require('../models/artist'),
        Song = require('../models/song');


router.get('/', (req,res)=>{
    res.render('admin/index.ejs');
});



module.exports = router;