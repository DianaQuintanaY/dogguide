const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';

const apiDogs = async({temperaments,name}) => {
  try{
    const apiDogs = await axios.get(URL);
    let dogsResult = apiDogs.data;
    if(temperaments){
      for (let temp of temperaments){
        dogsResult = dogsResult.filter(dog => dog.temperament?.split(', ').includes(temp));
        if(dogsResult.length === 0) return dogsResult ;
      };
    };
    if(name){
      dogsResult = dogsResult.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    };
    const apiDogsDetail = dogsResult.map((dog) => {
      return {
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        temperaments: dog.temperament
      }
    })
    return apiDogsDetail
    
  } catch (err){
    throw new Error(err.message) 
  }
};

module.exports ={apiDogs}