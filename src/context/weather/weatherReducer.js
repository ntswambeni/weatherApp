import {
  GET_AREAS,
  ADD_AREA,
  DELETE_AREA,
  UPDATE_AREA,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  SET_OFF_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_AREAS:
      return {
        ...state,
        areas: action.payload,
        loading: false,
      };
    case ADD_AREA:
      return {
        ...state,
        areas: [action.payload, ...state.areas],
        loading: false,
      };
    case UPDATE_AREA:
      return {
        ...state,
        areas: state.areas.map((area) =>
        area.id === action.payload.id ? action.payload : area
        ),
        loading: false,
      };  
    case   DELETE_AREA:
      return  {
          ...state,
          areas: state.areas.filter(area=> 
                  area.id !== action.payload
              )
      }    
    case SET_CURRENT:
      return {
        ...state,
        currentArea: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentArea: null,
      };  
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_OFF_LOADING:
      return {
        ...state,
        loading: false,
      };  
    default:
      return state;
  }
};
