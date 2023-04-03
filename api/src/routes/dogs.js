const dogsRouter = require('express').Router();
const {getAllDogs} = require('../controllers/getAllDogs');
const {saveDogsData} = require('../controllers/saveDogData');
const {getDogsById} = require('../controllers/getDogsById');
const {getDogsSearchByName} = require('../controllers/getDogsSearchByName');
const {validation} = require('../controllers/validation');
const {getDogsSearch} = require('../controllers/getDogsSearch');
const {deleteDog} = require('../controllers/deleteDog');
const {updateDog} = require('../controllers/updateDog');
const {idRazaParams} = require('../controllers/idRazaParams')
module.exports = dogsRouter;

dogsRouter.param('idRaza', idRazaParams);
dogsRouter.get('/', getAllDogs); 
dogsRouter.post('/',validation, saveDogsData);
dogsRouter.get('/name', getDogsSearchByName);
dogsRouter.post('/search', getDogsSearch);
dogsRouter.get('/:idRaza', getDogsById);
dogsRouter.delete('/:idRaza', deleteDog); 
dogsRouter.put('/:idRaza',validation, updateDog); 





