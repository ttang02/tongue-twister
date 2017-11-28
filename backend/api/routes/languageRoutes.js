module.exports = function(app){
    var language = require('../controllers/languageController');
    var languages = require('../controllers/languagesController');

    //Create a new language
    app.route('/api/language')
        .get(languages.read)
        .post(language.create)
    ;
    //GET / PUT / DELETE by Id
    app.route('/api/language/:languageId')
        .get(language.read)
        .put(language.update)
        .delete(language.delete)
    ;
}