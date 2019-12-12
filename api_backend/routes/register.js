var Login = require('../models/login.js');
let express = require('express');

let router = express.Router();
// var db;

router.post('/',(req,res)=>{

  
    Login.create(req.body)
    .then(login =>
        {
            console.log(login);
            res.send(login)

        })
    .catch(err => 
        {
            console.log(err);
        })
    }
    )

module.exports=router;
    

