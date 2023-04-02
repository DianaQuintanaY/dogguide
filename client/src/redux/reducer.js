import { 
  GET_CHARACTERS, 
  CHARACTER_DETAIL, 
  CLEAN_DETAIL, 
  SAVE_CHARACTERS, 
  SEARCH_BY_NAME, 
  GET_TEMPERAMENTS,
  SHOW_ERROR
 } from "./action-type";

const initialState = {
  characters: [],
  characterDetail:{},
  allTemperaments: [],
  infoPagination: {},
  recentlyCreated: "",
  error: {},
};

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case GET_CHARACTERS:
      return { 
        ...state,
        characters: action.payload.data,
        infoPagination: {
          page: action.payload.page, 
          limit: action.payload.limit, 
          total:  action.payload.total, 
          filters: action.payload.filters }

      }
    case CHARACTER_DETAIL:
      return{
        ...state,
        characterDetail: action.payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {}
      }
    case SAVE_CHARACTERS:
       return {
        ...state, recentlyCreated: action.payload
      }
    case SEARCH_BY_NAME:
      return {
          ...state,
          characters: action.payload.data,
          infoPagination: {
            page: action.payload.page, 
            limit: action.payload.limit, 
            total:  action.payload.total, 
            filters: action.payload.filters }
        }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload
      }
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {...state}
  }
};

export default reducer;

