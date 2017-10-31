var mongoose = require('mongoose');
var TongueTwister = mongoose.model('TongueTwisters');

//GET by ID : TongueTwister
exports.read = function(req, res){
    TongueTwister.findById(req.params.ttId, function(err, tt){
      if(err) {
        res.send(err);
      }
      res.json(tt);
    });
    console.log("API called GET : TongueTwister / GET by ID");
  };
  
  //PUT new TongueTwister
  exports.create = function(req, res){
    var newTongueTwister = new TongueTwister(req.body);
    
    newTongueTwister.save((err, tt) =>{
      if(err){
        res.send(err);
      }
      res.json(tt);
    });
    console.log("API called PUT : TongueTwister / PUT");
  };

  //POST by ID : update the TongueTwister
  exports.update = function(req, res){
    TongueTwister.findOneAndUpdate({ _id : req.params.ttId}, req.body, {new : true}, function(err, tt){
      if(err){
        res.send(err);
      }
      res.json(tt);
    });
    console.log("API called POST : TongueTwister / POST");
  };

  //DELETE by ID : delete the TongueTwister
  exports.delete = function(req, res){
    TongueTwister.remove({ _id : res.params.ttId}, function(err, tt){
      if(err){
        res.send(err);
      }
      res.json({ message : 'This phrase is deleted'});
    });
    console.log("API called DELETE : TongueTwister / DELETE");
  };
  