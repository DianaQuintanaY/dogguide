const {apiDogs} = require('./apiDogs');
const {dbDogs} = require('./dbDogs');
const {weightAverage} = require('../helpers/weightAverage')

const allDogs = async({temperaments, ordenBy, characteristics, name, limit, page, origin = 'all'}) => {
  try{
    
    let dogsResult;
    if(origin === 'all'){
      let resultdbDogs = await dbDogs({temperaments, name});
      let resultapiDogs = await apiDogs({temperaments, name});
      dogsResult = [...resultdbDogs,...resultapiDogs];
    };
    if(origin === 'database'){
      dogsResult = await dbDogs({temperaments, ordenBy, characteristics, name, limit, page})
    };
    if(origin === 'api'){
      dogsResult = await apiDogs({temperaments,name})
    };

    if(origin !== 'database'){
      if(characteristics === 'alphabetic'){
        if(ordenBy === 'DESC') dogsResult.sort((a,b) => b.name.localeCompare(a.name));
        else dogsResult.sort((a,b) => a.name.localeCompare(b.name));
      }}
    if(characteristics === 'weight'){
      
        if(ordenBy === 'DESC')  dogsResult.sort((a,b) => weightAverage(b.weight) - weightAverage(a.weight));
        else dogsResult.sort((a,b) => weightAverage(a.weight) - weightAverage(b.weight));
    };
    
    return dogsResult
  } catch (err){
    throw new Error(err.message) 
  }
};

module.exports = {allDogs};