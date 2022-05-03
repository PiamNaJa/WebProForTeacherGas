const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({ //สร้าง Schema หรือ table
    username : String,
    password : String,
    displayname : String,
    profileImage : String,
    isAdmin : {type : Boolean, default : false},
    favsong : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }]
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);