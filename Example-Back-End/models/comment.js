const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    author : {
        id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
        username : String
    },
     
    text : String
});

module.exports = mongoose.model('Comment',commentSchema); //สร้าง Document ชื่อ Print โดยใช้ Attibute จาก Schema