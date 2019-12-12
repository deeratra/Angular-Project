var express = require('express');
var router = express.Router();
 var mathches = require('../models/overview')
 var login  = require('../models/login')
 var mongoose = require('mongoose');
 var app = require('../app')

 router.get('/', (req,res)=>{

    console.log("I am");

    mathches.find({}, (err,data) =>
    {
        if(err)
        console.log("err))"+ err)
        else
        {
          //  console.log("dataasa"+data)
            res.send(data);
        }
    })
})

    


module.exports= router;