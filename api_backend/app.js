var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register')
var overviewRouter = require('./routes/overview')
var batsman_scoreRouter = require('./routes/batsman_score')
var opponentRouter = require('./routes/opponent')

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/test1";
var db;

mongoose.connect(url, function (err, db) {
  if (err) throw err

  else {console.log("COnnection Successful");
  this.db=db;
  }

  })


  function verifyToken(req,res,next)
  {
    if(!req.headers.authorization){
      return res.status(401).send('Unauthorized Request')
    }

    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null')
    return res.status(401).send('Unauthorized Request')

    let payload = jwt.verify(token,'secretKey')
    if(!payload)
    {
      return res.status(401).send('Unauthorized Request')

    }

    req.userId = payload.subject
    next()

  }

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
var corsOption = 
{
  origin : "*",
  optionsSuccessStatus : 200
};
app.use(cors(corsOption));

app.use('/users', usersRouter);



app.get('/', (req,res)=>{
  console.log("In backdeeend");
})

app.use('/register', registerRouter)
app.use('/login', loginRouter);
app.use('/overview',verifyToken, overviewRouter)
app.use('/batsman_score',verifyToken, batsman_scoreRouter)
app.use('/opponent', verifyToken, opponentRouter)


module.exports = app;
