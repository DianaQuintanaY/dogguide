const dogsRouter = require('express').Router();
const {getAllDogs} = require('../controllers/getAllDogs');
const {saveDogsData} = require('../controllers/saveDogData');
const {getDogsById} = require('../controllers/getDogsById');
const {getDogsSearchByName} = require('../controllers/getDogsSearchByName');
const {validation} = require('../controllers/validation');
const {getDogsSearch} = require('../controllers/getDogsSearch')
module.exports = dogsRouter;


dogsRouter.get('/', getAllDogs); 
dogsRouter.post('/',validation, saveDogsData);
dogsRouter.get('/name', getDogsSearchByName);
dogsRouter.post('/search', getDogsSearch);
dogsRouter.get('/:idRaza', getDogsById); 




