import React from 'react';
import { createContext } from 'react';

export const AppContext=createContext()
const phone='+13434123431';
const name='Akhildas'
const MainContext = (props) => {


    return (
        <div>
            
        <AppContext.Provider value={{name,phone}}>
            {props.children}
        </AppContext.Provider>

        </div>
    );
}

export default MainContext;
