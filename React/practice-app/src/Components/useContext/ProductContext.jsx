import React from 'react';
import { createContext } from 'react';

export const AppContext=createContext()

const Shoes={
    name:'Air Jordan',
    size:7,
}

const ProductContext = (props) => {
    return (
        <div>

                <AppContext.Provider value={{Shoes}}>
                    {props.children}
                </AppContext.Provider> 
            
        </div>
    );
}

export default ProductContext;
