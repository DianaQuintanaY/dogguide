import { 
    GET_CHARACTERS, 
    CHARACTER_DETAIL, 
    CLEAN_DETAIL, 
    SAVE_CHARACTERS, 
    SEARCH_BY_NAME,
    GET_TEMPERAMENTS,
    SHOW_ERROR,
    DELETE_CHARACTERS,
    UPDATE_CHARACTERS,
    CLEAN_ERROR
 } from "./action-type";
import axios from "axios";

export const getCharacters = () =>{
    return async function(dispatch){
        try {
        let response = await axios.get('http://localhost:3001/dogs/');
        let info = response.data;
        info = {...info, data: info.data.map(item => { return { 
                id: item.id,
                image: item.image,
                name: item.name,
                temperaments: item.temperaments,
                weight: item.weight}
            })
         };
            return dispatch({type: GET_CHARACTERS, payload: info}) 
        } catch (error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};

export const characterDetail = (id)=>{
    return async function(dispatch){
        try {
                let response = await axios.get(`http://localhost:3001/dogs/${id}`);
                let data = response.data;
                let result = {
                image: data.image,
                name: data.name,
                temperaments: data.temperaments,
                weight: data.weight,
                id: data.id,
                height: data.height,
                life_span: data.life_span
            };
            return dispatch({type: CHARACTER_DETAIL, payload: result }) 
        } catch (error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};

export const cleanDetail = ()=>{
    return {type:CLEAN_DETAIL }
};

export const cleanError = ()=>{
    return {type:CLEAN_ERROR }
};

export const saveCharacters = (body) => {
    return async function (dispatch){
        try{
            const response = await axios.post('http://localhost:3001/dogs/', body);
            const data = response.data;
            return dispatch({type:SAVE_CHARACTERS, payload: data})
        }catch(error){
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};

export const getCharactersByName = (name) => {
    return async function(dispatch){
        try {
        let response = await axios.get(`http://localhost:3001/dogs/name?q=${name}`);
        let info = response.data;
        info ={...info, data: info.data.map(item => { return { 
                id: item.id,
                image: item.image,
                name: item.name,
                temperaments: item.temperaments,
                weight: item.weight}
            })
         };
        return dispatch({type: SEARCH_BY_NAME, payload: info }) 
        } catch (error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};

export const getTemperaments = async (dispatch) => {
    try {
        let response = await axios.get('http://localhost:3001/temperaments/all');
        let data = response.data;
        return dispatch({type: GET_TEMPERAMENTS, payload: data})
    } catch(error) {
        console.log(error);
        return dispatch({type: SHOW_ERROR, payload: error});
    }
};


export const getRefreshPagination = ({page=1,filters,limit=8} ) => {
    return async function(dispatch){
        try {
        const body ={limit, page};
        const{temperaments, ordenBy, characteristics, name, origin} = filters;
        if(temperaments) body.temperaments=temperaments;
        if(ordenBy) body.ordenBy = ordenBy;
        if(characteristics) body.characteristics=characteristics;
        if(name) body.name = name;
        if(origin) body.origin = origin;
        let response = await axios.post('http://localhost:3001/dogs/search', body )
        let info = response.data;
        info ={...info, data: info.data.map(item => { return { 
                id: item.id,
                image: item.image,
                name: item.name,
                temperaments: item.temperaments,
                weight: item.weight}
            })
         };
        return dispatch({type: SEARCH_BY_NAME, payload: info })
        } catch (error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};


export const deleteCharacters = (id) => {
    return async function(dispatch){
        try {
            let response = await axios.delete(`http://localhost:3001/dogs/${id}`);
            let data = response.data;
            return dispatch({type: DELETE_CHARACTERS, payload: data})
        } catch(error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};

export const updateCharacters = (id, body) => {
    return async function(dispatch){
        try {
            let response = await axios.put(`http://localhost:3001/dogs/${id}`, body);
            let data = response.data;
            return dispatch({type: UPDATE_CHARACTERS, payload: data})
        } catch(error) {
            console.log(error);
            return dispatch({type: SHOW_ERROR, payload: error});
        }
    }
};