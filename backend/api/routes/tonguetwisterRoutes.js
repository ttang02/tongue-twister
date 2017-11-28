module.exports = function(app){
    var tonguetwister = require('../controllers/TongueTwisterController');
    var tonguetwisters = require('../controllers/TongueTwistersController');

    //GET ALL : tonguetwister
    app.route('/api/tonguetwister')
        .get(tonguetwisters.read)
    
    //Create a new tonguetwister
    app.route('/api/tonguetwister')
        .post(tonguetwister.create)
    ;
    //GET / PUT / DELETE by Id : tonguetwister
    app.route('/api/tonguetwister/:tonguetwistedId')
        .get(tonguetwister.read)
        .put(tonguetwister.update)
        .delete(tonguetwister.delete)
}