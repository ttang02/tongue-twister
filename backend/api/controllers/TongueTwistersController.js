var mongoose = require('mongoose');
var TongueTwisters = mongoose.model('TongueTwisters');

exports.read = function(req, res){
    TongueTwisters.find({}, function(err, tts){    
        if(err){
            res.status(500).send({message : "Some error occured while retrieving tonguetwisters."});
        }
        res.status(200).send(tts);
    });
    console.log("API GET ALL : TongueTwisters / Read");
}