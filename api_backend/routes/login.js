var Login = require('../models/login.js');
let express = require('express');
const jwt = require('jsonwebtoken');
// var mongoose = require('mongoose');
let router = express.Router();

router.post('/',(req,res)=>{

    //console.log(" I m batman");
     var name = req.body.username;
    // var password = req.body.password;
    //console.log(name);
    var login = new Login(req.body);
    console.log(name);
    Login.findOne({username:req.body.username}, (err,user) => {
        if(err)
        console.log("ERROR");
        else{
            if(!user)
                res.status(401).send('Invalid email')
               
            else if(user.password != req.body.password)
                res.status(401).send('Invalid Password')

            else
               {
                   let payload = { subject: user._id}
                   let token = jwt.sign(payload,'secretKey')

                    res.status(200).send({token})

               } 



            // res.status(200).json({
            //     status:'Login Successful'
            };
        
        }
)
    })

module.exports = router;