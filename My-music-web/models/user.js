const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    username : String,
    password : String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);