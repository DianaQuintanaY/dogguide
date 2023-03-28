const temperamentsRouter = require('express').Router();
module.exports = temperamentsRouter;

const {getTemperamentsOfApiData} = require('../controllers/saveApiTemperaments')

temperamentsRouter.get('/all', getTemperamentsOfApiData)