//Modules
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var yaml = require('yamljs');

//swagger
var swaggerUi = require('swagger-ui-express');
var swaggerdoc = yaml.load('./api/swagger/swagger.yaml');

//Models 
var TongueTwister = require('./api/models/tongueTwisterModel');

//Import Routes
var tonguetwisterRoutes = require('./api/routes/tonguetwisterRoutes');

//Set Globals
var app = express();
var port = process.env.PORT || 3000;

//Database connection
var mongoClient = mongodb.MongoClient;
mongoose.Promise = Promise;
mongoose.connect('mongodb://lam:lamlam77@ds113915.mlab.com:13915/tonguetwisterdb', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

//use body-parser middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Routes
tonguetwisterRoutes(app);

app.get('/', function(req, res){
  res.sendFile('./views/home.html');
});

//error 
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error : err.message});
});

//swagger 
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerdoc));

var server = app.listen(port, function(){
  console.log("App now running on port", port);
});
  