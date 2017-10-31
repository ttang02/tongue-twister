var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TongueTwisterSchema = new Schema({
  phrase : {
    type : String,
    required : 'The phrase is required'
  },
  language : {
    type : String,
    required : 'The language is required'
  }
});

module.exports = mongoose.model('TongueTwisters', TongueTwisterSchema);
