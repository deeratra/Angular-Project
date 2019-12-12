var Login = require('../models/login.js');
let express = require('express');
// var mongoose = require('mongoose');
let router = express.Router();

router.post('/', (req,res)=>{

    console.log(req.body.team1)    


    db.collection('mathches').count({//team1:req.body.team1, team2:req.body.team2
      $or:[
           {
                $and:[{team1:req.body.team1 }, {team2:req.body.team2}]
           }    ,
           {
               $and:[{team1:req.body.team2 }, {team2:req.body.team1}]
           }]
    },
    (err,data)=>{
        if(data)
        {
            console.log(data);
            res.send(data.toString());
        }

        else
        console.log("err"+err);
    }
    )
    
})
// db.collection('matches').count

module.exports = router;