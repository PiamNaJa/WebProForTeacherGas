const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    image : String,
    name : String, 
    artist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }
});

module.exports = mongoose.model('Album', albumSchema);