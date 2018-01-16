var mongoose = require('mongoose');
var TongueTwister = mongoose.model('TongueTwisters');
var Language = mongoose.model('Languages');

//GET by ID : TongueTwister
exports.read = function (req, res) {
  TongueTwister.findById(req.params.ttId, function (err, tt) {
    if (err) {
      console.log(err);
      res.status(500).send({message : "Could not retrieve tonguetwister with id : "+req.params.ttId});
    }
    else{
      res.status(200).send(tt);
    }
  });
  console.log("API called GET : TongueTwister / GET by ID");
};

//GET array by language : TongueTwister
exports.readBylanguage = function(req, res){
  //params = language
  Language.findOne({ codelang : req.paramlanguages},'_id',(err, idLanguage) =>{
    if(idLanguage){
      TongueTwister.find({ languageid : idLanguage}, (err, tts) =>{
        if(err){
          console.log('err');
          res.status(500).send({message : "Could not retrieve tonguetwister by language code : "+req.params.language });
        }
        else{
          res.status(200).send(tts);
        }
      });
    }
    else{
      res.status(500).send({message : "Could not retrieve tonguetwister by language code : "+req.params.language});
    }
  });
  console.log("API called GET by language : TongueTwister / GET By code language");
}


//POST new TongueTwister
exports.create = function (req, res) {
  if(!req.body.phrase){
    res.status(400).send({message : "content can not be empty"});
  }
  if(!req.body.languageid){
    res.status(401).send({message : "languageId can not be empty"});
  }
  var newTongueTwister = new TongueTwister(req.body);
  //Test if Language exist
  Language.count({_id : req.body.languageid}, (err, count) =>{
    if(count > 0){
      //Create a new TongueTwister with a languageid existing
      newTongueTwister.save((err, tt) => {
        if (err) {
          console.log(err);
          res.status(500).send({message : "Some error occurred while creating the TongueTwister"});
        }
          res.status(200).send(tt);
      });
    }
    res.status(501).send({message : "Could not retrieve languageid with id " + req.body.languageid});
  });
  console.log("API called PUT : TongueTwister / PUT");
};

//PUT by ID : update the TongueTwister
exports.update = function (req, res) {
  if(!req.body.phrase){
    res.status(400).send({message : "content can not be empty"});
  }
  if(!req.body.languageid){
    res.status(401).send({message : "languageId can not be empty"});
  }
  //new true : means to return the update data
  TongueTwister.findOneAndUpdate({
    _id: req.params.ttId
  }, req.body, {
    new: true
  }, function (err, tt) {
    if (err) {
      console.log(err);
      res.status(500).send({message: "Could not update TongueTwister with id " + req.params.ttId});
    }
    res.status(200).send(tt);
  });
  console.log("API called POST : TongueTwister / POST");
};

//DELETE by ID : delete the TongueTwister
exports.delete = function (req, res) {
  TongueTwister.remove({
    _id: res.params.ttId
  }, function (err, tt) {
    if (err) {
      console.log(err);
      res.status(500).send({message : "TongueTwister not found with id :"+res.params.ttId});
    }
    res.status(200).send({message: 'This TongueTwister is deleted'});
  });
  console.log("API called DELETE : TongueTwister / DELETE");
};