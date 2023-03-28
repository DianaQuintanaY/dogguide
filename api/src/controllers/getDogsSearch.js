const {allDogs} = require('./allDogs');
const {pagination} = require('./pagination');

const getDogsSearch = async(req, res) => {
  try{
    const {temperaments, ordenBy, characteristics, name, limit=8, page=1, origin = 'all'} = req.body;
    const info = await allDogs({temperaments, ordenBy, characteristics, name, limit, page, origin});
    
    const total = info.length;
    let data= pagination(Number(page),limit,total,info)
    const response = {
      page: Number(page),
      limit,
      total,
      data,
      filters:{}
    };
    if(temperaments) response.filters.temperaments = temperaments;
    if(ordenBy) response.filters.ordenBy= ordenBy;
    if(characteristics) response.filters.characteristics = characteristics;
    if(name) response.filters.name = name;
    if(origin) response.filters.origin = origin;

    return res.json(response)

  } catch (err){
    return res.status(404).send(err.message)   
  }
};

module.exports = {getDogsSearch};