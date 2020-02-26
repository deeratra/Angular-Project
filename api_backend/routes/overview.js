var express = require('express');
var router = express.Router();
 var mathches = require('../models/overview')
 var login  = require('../models/login')
 var mongoose = require('mongoose');
 var app = require('../app')

 router.get('/getData', (req,res)=>{
     console.log('ddd')
    mathches.find({}, (err,data) =>
    {
        if(err)
        console.log("err))"+ err)
        else
        {
            res.send(data);
        }
    })
})

router.delete('/delete/:id',(req,res)=>{
    console.log('there there')
        // console.log(req.params.id)
        // console.log(req.params.id[1])
        // console.log(req.params.id[2])

     var arr =[];
     var id = req.params.id.split(',')
    //  console.log(id);

    for(var i=0;i<id.length;i++)
    {
       arr.push(parseInt(id[i]))
    }

    console.log(arr)
db.collection('mathches').remove({'id':{'$in':arr}})
    //console.log(req.params.id)
     res.send(JSON.stringify('delete'))
    
    
})

    


module.exports= router;