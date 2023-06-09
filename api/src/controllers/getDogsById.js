const {apiDogs} = require('./apiDogs');
const {Dogs, Temperaments} = require('../db');

const getDogsById = async(req, res) => {
  try{
    const {idRaza} = req.params;
    let dogDetail;

    if(!isNaN(Number(idRaza))){
      dogDetail =  await apiDogs({})
      dogDetail = dogDetail.find(dog => dog.id === Number(idRaza));

      if( !dogDetail ) {
        throw new Error('Id no encontrado')}

    } else {
      let result;
      const options = {
        where:{id: idRaza},
        include:[{
          model: Temperaments,
          as: 'temperaments',
          attributes: ['name'],
          through: {
            attributes: [],
          },
        }],
      };
      result = await Dogs.findOne(options);
      
      if( !result ) {
        throw new Error('Id no encontrado')};

      const newTemperaments = result.temperaments.map(i => i.name).join(', ');
      dogDetail = {
        id: result.id,
        image: result.image,
        name: result.name,
        height: result.height,
        weight: result.weight,
        life_span: result.life_span,
        temperaments: newTemperaments}
    }
    return res.json(dogDetail)
  } catch (err){
    return res.status(404).send(err.message)   
  }
};

module.exports = {getDogsById};