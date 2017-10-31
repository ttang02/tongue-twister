var mongoose = require('mongoose');
var TongueTwisters = mongoose.model('TongueTwisters');

exports.read = function(req, res){
    TongueTwisters.find({}, function(err, tts){    
        if(err){
            res.send(err);
        }        
        res.json(tts);
    });
    console.log("API GET ALL : TongueTwisters / Read");
}