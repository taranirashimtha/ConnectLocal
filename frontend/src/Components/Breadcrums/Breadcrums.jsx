import React from 'react';
import './Breadcrums.css';

const Breadcrums = ({ product }) => {
    return (
        <div className='breadcrum'>
            <span>HOME</span>            
            {product && <span>{product.category}</span>}
            {product && <span>{product.name}</span>}
        </div>
    );
}

export default Breadcrums;
