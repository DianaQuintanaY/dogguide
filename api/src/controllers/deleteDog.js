
const deleteDog = async(req, res) => {
  try{
    const dogTemperament = await req.dog.getTemperaments();
    const dogTempDelete = await req.dog.removeTemperaments(dogTemperament);
    const dogDelete = await req.dog.destroy();
    return res.status(204).send();
  } catch(err) {
    return res.status(500).send(err.message)  
  }
}

module.exports = {deleteDog}