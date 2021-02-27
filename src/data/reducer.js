import producer from "immer";
import {appActions} from "./actions" ;

export const initialState ={
    contacts :[],
    selectedContact:{},
    profile: {},
}

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case appActions.GET_CONTACTS : return producer(state,draftState=>{
            draftState.contacts = [...action.payload]; 
            draftState.selectedContact = action.payload[1];
            });
        case appActions.SELECT_CONTACTS: return producer(state,draftState =>{
            draftState.selectedContact = draftState.contacts.find(c => c.login.uuid === action.payload)
        });
        default : return state;
    }
}

