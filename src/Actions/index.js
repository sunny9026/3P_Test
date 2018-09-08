import { ADD_COMMENT } from "./action-types"  
export const addComment = comment =>  
 (  
     {   
         type: ADD_COMMENT,   
         payload: comment   
     }  
); 