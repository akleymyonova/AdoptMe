const animalRoutes = require('./animal_routes');
const user_routes = require('./user_routes');

module.exports = function(app, db) {
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  animalRoutes(app, db);
  user_routes(app, db);
};