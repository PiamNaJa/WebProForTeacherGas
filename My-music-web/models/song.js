const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    image : String,
    name : String, 
    genre : String,
    artist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    },
    release : {
        type: Date,
        default: new Date()
    },
    fav : {
        type: Number,
        default: 0
    },
    lyric: String
});

module.exports = mongoose.model('Song', songSchema);