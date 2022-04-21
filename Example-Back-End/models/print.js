const mongoose = require('mongoose');

const printSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    name : String, 
    Artist : String, 
    image : String,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('Print', printSchema); //สร้าง Document ชื่อ Print โดยใช้ Attibute จาก Schema