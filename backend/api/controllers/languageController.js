var mongoose = require('mongoose');
var Language = mongoose.model('Languages');

//GET by ID : language
exports.read = function(req, res){
  Language.findById(req.params.langageId, function(err, language){
    if(err) {
      console.log(err);
      res.status(500).send({message : "Could not retrieve language with id"+req.params.langageId});
    }
    res.status(200).send(language);
  });
  console.log("API called GET : Language / GET by ID");
};

//POST new language
exports.create = function(req, res){
  if(!req.body.language){
    res.status(400).send({message : "language can not be empty"});
  }
  if(!req.body.codelang){
    res.status(401).send({message : "codelang can not be empty"});
  }
  var newLanguage = new Language(req.body);
  newLanguage.save((err, language) =>{
    if(err){
      console.log(err);
      res.status(500).send({message : "Some error occurred while creating the Language"});
    }
    res.status(200).send(language);
  });
  console.log("API called PUT : Language / PUT");
};

//PUT by ID : update the language
exports.update = function(req, res){
  if(!req.body.language){
    res.status(400).send({message : "language can not be empty"});
  }
  if(!req.body.codelang){
    res.status(401).send({message : "codelang can not be empty"});
  }
  
  Language.findOneAndUpdate({ _id : req.params.languageId}, req.body, {new : true}, function(err, language){
    if(err){
      console.log(err);
      res.status(500).send({message: "Could not update Language with id " + req.params.languageId});
    }
    res.status(200).send(language);
  });
  console.log("API called POST : Language / POST");
}
//DELETE by ID : delete the language
exports.delete = function(req, res){
  Language.remove({ _id : res.params.languageId}, function(err, language){
    if(err){
      console.log(err);
      res.status(500).send({message: "Could not update Language with id " + req.params.languageId});
    }
    res.status(200).send({message: 'This Language is deleted'});
  });
  console.log("API called DELETE : Language / DELETE");
}
