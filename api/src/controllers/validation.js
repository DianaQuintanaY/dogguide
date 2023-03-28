const {Temperaments} = require('../db');
const validation = async (req,res,next) => {
    try{
        const formatoImagenRegex = /\.(jpg|jpeg|png)$/;
        const {image, name, heightMin, heightMax, weightMin, weightMax, life_span, temperaments} = req.body;
        if(!image || !name || !heightMax || !heightMin || !weightMax || !weightMin || !life_span ) 
            throw new Error('Faltan completar datos');
        if( name.length > 35) 
            throw new Error('El nombre no puede superar los 35 caracteres');
        if(!formatoImagenRegex.test(image)) 
            throw new Error('La imagen debe ser en formato "jpg", "jpeg" o "png" ');
        if([heightMin, heightMax, weightMin, weightMax, life_span].some(data => isNaN(data) || data === 0 ))
            throw new Error('Height, Weight, life_span deben ser numeros diferentes de 0');
        if(temperaments.length === 0 ) 
            throw new Error('Falta enviar temperamentos');

        const {count} = await Temperaments.findAndCountAll({where:{name:temperaments}})
        if(temperaments.length !== count) 
            throw new Error('algunos de los temperamentos enviados no estan registrados');

        next();
    }catch(err){
        return res.status(400).send(err.message)
    }   
};

module.exports = {validation}
