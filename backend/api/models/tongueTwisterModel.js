var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Languages = mongoose.model('Languages');

var TongueTwisterSchema = new Schema({
  phrase : {
    type : String,
    required : 'The phrase is required'
  },
  date : {
    type : Date,
    default : Date.now
  },
  languageid : {
    type : Schema.Types.ObjectId, ref : 'Languages',
    required :  "The language is required"
  }
});

module.exports = mongoose.model('TongueTwisters', TongueTwisterSchema);
