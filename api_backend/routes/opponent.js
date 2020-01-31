
let express = require('express');
let router = express.Router();
var Promise = require('promise');

router.post('/', async(req,res)=>{

    console.log(req.body.team1)
    class Opponent {
        constructor(matches,team1,team2,tie)
        {
            this.matches=matches;
            this.team1=team1;
            this.team2=team2;
            this.tie= 0;
        }
    }

    var oppo = new Opponent();
    var gfgd = getABC(req);
    
    

    async function getABC(req){


        let A = await getmatches(req);
        let B = await getteam1(req);
        let C = await getteam2(req);

        console.log('I reached des')

        oppo.matches=A;
         oppo.team1=B;
         oppo.team2=C;
         if(oppo.matches != oppo.team1 + oppo.team2)
    {
        oppo.tie = oppo.matches-oppo.team1-oppo.team2        
    }
    else
    {
        oppo.tie=0;
       
    }
   res.send(oppo)
   console.log(oppo)
        //return Promise.resolve(oppo);
    }    
}    
);


 function getmatches(req){

     return new Promise((resolve,reject) => {
        db.collection('mathches').count({
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
                  console.log('data'+ data);
                   return resolve(data);
                 
              }
          
              else{
              console.log("err"+err);
              oppo.matches=0;
             reject(err)
              }
          }
          )
     })
    
}
 function getteam1(req){
    return new Promise(res =>{
    db.collection('mathches').count({
        $and:[
            {
                $or:[
                    {
                         $and:[{team1:req.body.team1 }, {team2:req.body.team2}]
                    }    ,
                    {
                        $and:[{team1:req.body.team2 }, {team2:req.body.team1}]
                    }]
            },
            {
                winner:req.body.team1
            }
        ]
    },
    (err,data)=>{
        if(data)
            {
                console.log('team1 '+data);
                return res(data);
                
            }
            else
            oppo.team1=0;
        
    })
 })
}
function getteam2(req){
        return new Promise(res => {
        db.collection('mathches').count({
            $and:[
                {
                    $or:[
                        {
                             $and:[{team1:req.body.team1 }, {team2:req.body.team2}]
                        }    ,
                        {
                            $and:[{team1:req.body.team2 }, {team2:req.body.team1}]
                        }]
                },
                {
                    winner:req.body.team2
                }
            ]
        },
        (err,data)=>{
            if(data)
                {
                    console.log('team2 '+data);                   
                    return res(data);    
                }
            else
                oppo.team2=0;
            
            
        });
     })
}

module.exports = router;