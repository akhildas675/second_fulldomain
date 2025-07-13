import React from 'react';

import { AppContext } from './ProductContext';
import { useContext } from 'react';

const ProductList = () => {

    const{Shoes}=useContext(AppContext)


    return (
        <div>

            <span>Shoes Name:{Shoes.name}</span>
            <span>Shoes Size:{Shoes.size}</span>
            
        </div>
    );
}

export default ProductList;
