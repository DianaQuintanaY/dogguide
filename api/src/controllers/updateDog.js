const {Dogs,Temperaments} = require('../db');
const updateDog = async(req, res) => {
  const {image, name, heightMin, heightMax, weightMin, weightMax, life_span, temperaments} = req.body;
  try{
    const height = `${heightMin}-${heightMax}`;
    const weight = `${weightMin}-${weightMax}`;
   
    const dogTemperament = await req.dog.getTemperaments();
    const removeTemperamentsDogs = await req.dog.removeTemperaments(dogTemperament);
    const newDog = await req.dog.update({image,name, height,weight, life_span});
    const adderTemperament = await Temperaments.findAll({where:{name: temperaments}});
    const addedTemp = await newDog.addTemperaments(adderTemperament);

    return res.status(200).json(newDog.id);
  } catch(err) {
    console.log(err.message);
    return res.status(500).send(err.message)  
  }
};

module.exports = {updateDog}