const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    image : String,
    name : String
});

module.exports = mongoose.model('Artist', artistSchema);