import { ADD_COMMENT } from "../Actions/action-types";  
const initialState = {  
  comments: []  
};  
const rootReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case ADD_COMMENT:
        //console.log(...state.comments,action.payload);
      return { ...state,comments:[...state.comments,action.payload]};  
    default:  
      return state;
  }  
};  
export default rootReducer; // Please note: have not used combineReducer method because in our app we have only one reducer so no need of the same.