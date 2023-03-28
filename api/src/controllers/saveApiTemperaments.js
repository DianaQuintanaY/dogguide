require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;
const {Temperaments, Op} = require('../db')
const getTemperamentsOfApiData = async(req, res) => {
    try{
        const info = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        let allTemperaments = info.data.map(item => item.temperament).join(',').split(',').filter(item => item !=='').map((temperament) => temperament.trim());
        
        allTemperaments = [...new Set(allTemperaments)];

        await Promise.all(allTemperaments.map(temp => {
            return Temperaments.findOrCreate({where:{name: temp}})}));
     
        const temperamentsOfDb = await Temperaments.findAll({order:["name"]});
        if(!temperamentsOfDb.length) throw new Error('Not results');
        const responseTemperaments = temperamentsOfDb.map(item => {return {name: item.name, id: item.id}});
        return res.status(201).send(responseTemperaments)
        
    } catch(err) {
        return res.status(500).send(err.message)  
    }
}

module.exports = {getTemperamentsOfApiData}