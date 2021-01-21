const ObjectId = require('mongodb').ObjectId;
const productSearch = require('../productSearch');
const FullAnimalInfo = require('../classes/Animals').FullAnimalInfo;
const PartialAnimalInfo = require('../classes/Animals').PartialAnimalInfo;

const DEFULT_ERROR_MESSAGE = 'Ann error was occured:';

function _getDefaultErrorMessage(err) {
  return { 'error': `${DEFULT_ERROR_MESSAGE} ${err}` };
}

module.exports = function(app, db) {
  app.post('/animals', (req = {}, res) => {
    const animal = req.body;
    const database = db.db('AnimalShelter');
    database.collection('Animals').insertOne(animal, (err, result) => {
      if (err) {
        res.send({ 'error': `An error was occured: ${err}` });
      } else {
        res.send(result.ops[0]);
      }
    })
    
  });

  app.get('/animals', (req, res) => {
    const database = db.db('AnimalShelter');
    database.collection('Animals').find({}).toArray((err, result) => {
      if (err) {
        res.send(_getDefaultErrorMessage(err));
      } else {
        result = result.map(animalInfo => new PartialAnimalInfo(animalInfo));
        res.send(result);
      }
    });
  });

  app.get('/animal/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectId(id) };
    const database = db.db('AnimalShelter');
    database.collection('Animals').findOne(details, (err, item) => {
      if (err) {
        res.send(_getDefaultErrorMessage(err));
      } else {
        item = new FullAnimalInfo(item);
        res.send(item);
      }
    });
  });

  app.post('/animalByPhoto', async (req, res) => {
    const url = req.body.img.split(',')[1];
    const results = await productSearch.getSimilarProductsFile(url);
    console.log(results)
    res.send(results)
  })
};