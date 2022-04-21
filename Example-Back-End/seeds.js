const mongoose = require('mongoose'),
      Print = require('./models/print'),
      Comment = require('./models/comment');

function sendDB()
{
    Print.remove({}, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Data removal complete");
        }
    });
}

module.exports = sendDB;