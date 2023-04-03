const {Dogs} = require('../db');
const idRazaParams = async (req,res,next,id) =>{
  try{
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89aAbB][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if(!(!isNaN(Number(id)) || regex.test(id))) throw new Error('Id no valido');
    if(!isNaN(Number(id)) && req.method === "GET") next();
    else{
      const dog = await Dogs.findByPk(id);
      if(dog) {
        req.dog = dog;
        next();
      }else {
        throw new Error('Not Found');
      }
    }
  }catch(err){
    return res.status(404).send(err.message) 
  }

}

module.exports = {idRazaParams}