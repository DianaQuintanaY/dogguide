const {Dogs,Temperaments} = require('../db');
const saveDogsData = async(req, res) => {
    const {image, name, heightMin, heightMax, weightMin, weightMax, life_span, temperaments} = req.body;
    try{
      const height = `${heightMin}-${heightMax}`;
      const weight = `${weightMin}-${weightMax}`;
    
      const newDog = await Dogs.create({image,name, height,weight, life_span});
      const adderTemperament = await Temperaments.findAll({where:{name: temperaments}});
      const addedTemp = await newDog.addTemperaments(adderTemperament);

      return res.status(201).json(newDog.id);
      
    } catch(err) {
      console.log(err.message);
      return res.status(500).send(err.message)  
    }
}

module.exports = {saveDogsData}