import React from 'react';
import Contacts from './components/Contacts';
import Conversation from './components/Conversation';
import  {getContacts} from "./data/actions";
import {useApplicationContext} from "./data/context";
import {CircularProgress} from '@material-ui/core';


function App() {
  const [state,dispatch] = useApplicationContext();
    React.useEffect(()=>{
      getContacts(dispatch);
    },[]);
  
  return state.contacts.length >  0 ?
  (
    <div className="App">
           <Contacts/>
           <Conversation />
    </div>
  )
  :
  (
    <div className="App">
          <div className="loading__icon">
            <h2>Welcome to Whatsapp</h2>
            <CircularProgress color="secondary"/>
          </div>
    </div>
  );
}

export default App;
