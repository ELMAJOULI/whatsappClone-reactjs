import axios from "axios";


const GET_CONTACTS = "GET_CONTACTS";
const SELECT_CONTACTS = "SELECT_CONTACTS";
export const appActions ={
    GET_CONTACTS,
    SELECT_CONTACTS,
}

export const getContacts =async(dispatch) =>{
    const {data:{results}} = await axios.get("https://randomuser.me/api/?results=10");
    console.log(results);
    dispatch({type:GET_CONTACTS,payload:results})
}
export const selectContact = (uuid,dispatch)=>{
    dispatch({type:SELECT_CONTACTS,payload:uuid});
}