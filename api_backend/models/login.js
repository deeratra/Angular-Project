var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
    name :
    {
        type:String,
        required:true
    },
    username : 
    {
        type:String,
        unique:true,
        required:true,
        trim:true
    },

    password : {
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Login', LoginSchema,'login')