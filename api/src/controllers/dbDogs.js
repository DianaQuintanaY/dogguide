const {Dogs, Op, Temperaments} = require('../db');

const dbDogs = async({ temperaments, ordenBy, characteristics, name, limit, page}) => {
  try{
    const options = {
      include:{
        model: Temperaments,
        as: 'temperaments',
        attributes: ['name'],
        through: {
          attributes: [],
          where: {}
        }, 
      },
      where:{}
    };
    
    if(ordenBy && characteristics){
      if(characteristics === 'alphabetic') options.order = [['name', ordenBy]]
    };

    if(name){
      options.where.name = {
        [Op.iLike]: `%${name}%`}
    }; 

    if(limit && page){
      options.limit = limit;
      options.offset = (page-1)*limit;
    };
    
    let dataDogs = await Dogs.findAll(options);
    console.log(dataDogs);
 
    let dballdogs = [...dataDogs].map((dog) => {
    return {
      id: dog.id,
      image: dog.image,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperaments: dog.temperaments.map(i => i.name).join(', ')
    }});

    if(temperaments){
      for (let temp of temperaments){
        dballdogs = dballdogs.filter(dog => dog.temperaments.split(', ').includes(temp));
        if(dballdogs.length === 0) break;
      };
    };
    
    return dballdogs
  } catch (err){
    throw new Error(err.message) 
  }
};

module.exports = {dbDogs};