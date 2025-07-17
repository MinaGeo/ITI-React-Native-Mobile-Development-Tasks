import { act } from "react";

export const usersReducer=(state, action)=>{
    if(action.type==="CLEAR")
        return [];
    else if(action.type==="ADDUsers")
        return action.payload

}