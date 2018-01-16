//Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const yaml = require('yamljs');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerdoc = yaml.load('./api/swagger/swagger.yaml');

//Models (language first)
const Languages = require('./api/models/languageModel');
const TongueTwister = require('./api/models/tongueTwisterModel');


//Import Routes
const languagesRoutes = require('./api/routes/languageRoutes');
const tonguetwisterRoutes = require('./api/routes/tonguetwisterRoutes');


//Set Globals
let app = express();
let port = process.env.PORT || 3000;

//Database connection
mongoose.Promise = Promise;
//mongodb://mongo/tonguetwisterdb
mongoose.connect('mongodb://lam:lamlam77@ds113915.mlab.com:13915/tonguetwisterdb', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

//use body-parser middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Routes
languagesRoutes(app);
tonguetwisterRoutes(app);

//swagger 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerdoc));

//error 
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error : err.message});
});
app.listen(port, function(){
  console.log("App now running on port", port);
});
  