var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assert = require('assert');
var runs = require('../models/deliveries');

router.get('/', (req,res)=>{

    // console.log("I am");
    var total = [];
    var batsman = [];
              db.collection('deliveries').aggregate([
                    
                    {
                        "$group":{
                            "_id" : "$batsman",
                            "total" : { "$sum" :"$batsman_runs"},
                            "balls" : { "$sum" : 1     }
                        }
                    }
                ]).toArray(
                (err, data)=>
            {
                if(data)
                {
                   // console.log(data);
                    res.send(data);
                }

                else
                console.log("error"+err);
            })
                





    //         });
    //     }
    // });
    //onsole.log(cursor);
    
   
})

module.exports= router