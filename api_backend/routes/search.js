let express = require('express');
let router = express.Router();
var Promise = require('promise');

router.post('/', (req, res) => {


    class Search {
        constructor(runs, balls_faced, wickets, catches, stumping) {
            this.runs = runs;
            this.balls_faced = balls_faced
            this.wickets = wickets
            this.catches = catches
            this.stumping = stumping
        }
    }

    var search = new Search()
    search.runs=0;
    search.balls_faced=0;
    search.catches=0;
    search.stumping=0;
    search.wickets=0;
    var getDetails = getDetails(req)

    async function getDetails(req) {
        let runs = await getRuns(req);
        console.log(runs);
        let wickets = await getWickets(req)
        console.log(wickets);
        let catches = await getCatches(req)
        console.log(catches);
        let stumping = await getStumping(req)
        console.log(stumping);

        search.runs = runs.total
        search.balls_faced = runs.balls;
        search.wickets = wickets;
        search.catches = catches;
        search.stumping = stumping;

        res.json(search);
    }

    function getRuns(req) {

        return new Promise((resolve, reject) => {
            db.collection('deliveries').aggregate([


                { $match: { batsman: req.body.name } },
                {
                    "$group":
                    {
                        "_id": null,
                        "total": { "$sum": "$batsman_runs" },
                        "balls": { "$sum": 1 }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        "total": 1,
                        "balls": 1
                    }
                }
            ]).next(
                (err, data) => {
                    if (data) {
                        // console.log(data);
                        return resolve(data);
                    }

                    else {
                        // console.log("error" + err);
                        if(err===null)
                        return resolve(0);
                        else
                        return reject(err);
                    }
                })
        })

    }

    function getWickets(req) {
        return new Promise((resolve, reject) => {
            db.collection('deliveries').count({

                $and: [
                    { bowler: req.body.name },
                    {
                        dismissal_kind: { $nin: ["retired hurt", "run out", ""] }
                    }
                ]
            }, (err, data) => {
                if (data) {
                    // console.log(data)
                    return resolve(data)
                    // res.status(200).send(String(data));
                }
                else {
                    // console.log("error" + err);
                    if(err===null)
                    return resolve(0);
                    else
                    return reject(err);
                }

            })

        })

    }

    function getCatches(req) {
        return new Promise((resolve, reject) => {
            db.collection('deliveries').count({

                $or: [
                    {
                        $and: [{ fielder: req.body.name }, { dismissal_kind: 'caught' }]
                    },
                    {
                        $and: [{ bowler: req.body.name }, { dismissal_kind: 'caught and bowled' }]
                    }
                ]
            }, (err, data) => {
                if (data) {
                    return resolve(data)
                }
                else {
                    // console.log("error" + err);
                    if(err===null)
                    return resolve(0);
                    else
                    return reject(err);
                }
            }
            )

        })
    }

    function getStumping(req) {
        return new Promise((resolve, reject) => {

            db.collection('deliveries').count({
                $and: [
                    { fielder: req.body.name },
                    { dismissal_kind: 'stumped' }
                ]

            }, (err, data) => {
                if (data) {
                    return resolve(data)
                }

                else {
                    // console.log("error" + err);
                    if(err===null)
                    return resolve(0);
                    else
                    return reject(err);
                }
            }
            )

        })
    }


});

module.exports = router;

