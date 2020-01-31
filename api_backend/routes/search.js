let express = require('express');
let router = express.Router();
var Promise = require('promise');

router.post('/', (req,res)=>{


    console.log('hi'+req.body.name)

    class Search{
        constructor(runs,balls_faced,wickets,catches,stumping)
        {
            this.runs= runs;
            this.balls_faced=balls_faced
            this.wickets=wickets
            this.catches=catches
            this.stumping=stumping
        }
    }

    var search = new Search()

    var getDetails = getDetails(req)

    async function getDetails(req)
    {
        let runs = await getRuns(req);
        // let balls_faced = await balls_faced(req)
        // let wickets = await wickets(req)
        // let catches = await catches (req)
        // let stumping = await stumping(req)
    }

    function getRuns(req){

        return new Promise((resolve,reject) => {
            db.collection('deliveries').aggregate(

                
                  {  $match : {batsman: 'V Kohli'}},
                {
                        "$group":
                        {
                            "_id" : null,
                            "total" : { "$sum" :"$batsman_runs"},
                            "balls" : { "$sum" : 1}
                        }
                }
                
                ),(error,data) =>{
                    if(data)
                    {
                        console.log('data'+data)
                        return resolve(data);
                    }
                    else
                    {
                        console.log('err'+error)
                        reject(error)
                    }
                }

        })
    }

    // db.collection('deliveries').count({

    //     $and:[
    //         {bowler:req.body.name},
    //           {
    //               dismissal_kind:{$nin:["retired hurt", "run out",""]}
    //           }
    //         ]
    // },(err,data)=>{
    //     if(data)
    //     {console.log(data)
    //         res.status(200).send(String(data));}
    //         else
    //         console.log(err)
    // })
    

});

module.exports = router;

// $not:[{dismissal_kind : 'run out'},
//   { dismissal_kind:'retired hurt'},
//   {dismissal_kind :'obstructing the field'}]
