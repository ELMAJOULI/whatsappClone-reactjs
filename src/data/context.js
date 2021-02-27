import React from 'react'

const ApplicationContext = React.createContext();

export const Context = ({reducer,initialState,children}) => {
    return (
        <ApplicationContext.Provider value={React.useReducer(reducer,initialState)} >
         {children}   
        </ApplicationContext.Provider>
    )
}
export const useApplicationContext = () => React.useContext(ApplicationContext);
