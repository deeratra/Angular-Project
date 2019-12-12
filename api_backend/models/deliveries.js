var mongoose = require('mongoose');

var deliverSchema = new mongoose.Schema({

    _id :
    {
        type:String
    },
    
    batsman_runs :
    {
        type: Number
    }

})


module.exports = mongoose.model('Runs', deliverSchema)