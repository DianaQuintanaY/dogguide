const {allDogs} = require('./allDogs');
const {pagination} = require('./pagination');

const getDogsSearchByName = async(req, res) => {
  try{
    const {q,limit=8,page=1} = req.query;
    const info= await allDogs({name:q});
    const newPage = Number(page);
 
    // if(info.length === 0) throw new Error("No hay coincidencia con el nombre enviado");
    const total = info.length;
    let data= pagination(newPage,limit,total,info)
    const response = {
      page: newPage,
      limit,
      total,
      data,
      filters:{name:q}
    }
      return res.json(response)
      
  } catch (err){
    return res.status(404).send(err.message)   
  }
};

module.exports = {getDogsSearchByName};