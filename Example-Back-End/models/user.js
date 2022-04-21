const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    username : String, 
    password : String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema); //สร้าง Document ชื่อ Print โดยใช้ Attibute จาก Schema