var mongoose = require('mongoose');
var Languages = mongoose.model('Languages');

exports.read = function(req, res){
    Languages.find({}, function(err, languages){    
        if(err){
            res.status(500).send({message : "Some error occured while retrieving languages."});
        }
        res.status(200).send(languages);
    });
    console.log("API GET ALL : Languages / Read");
}