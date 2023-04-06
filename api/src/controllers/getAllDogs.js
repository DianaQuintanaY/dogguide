const {allDogs} = require('./allDogs');
const {pagination} = require('./pagination');

const getAllDogs = async(req, res) => {
  try{
    const info= await allDogs({});
    const page = 1;
    const limit = 8; 
   
    const total = info.length;
    let data= pagination(page,limit,total,info)
    const response = {
      page,
      limit,
      total,
      data,
      filters:{}
    };
    return res.status(200).json(response)
  } catch (err){
    return res.status(404).send(err.message)   
  }
};

module.exports = {getAllDogs};