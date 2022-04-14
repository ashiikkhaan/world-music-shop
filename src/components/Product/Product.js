import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, brand} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product images" />
            <h2>{name}</h2>
            <h3>Brand: {brand}</h3>
            <h3>Price: $ {price}</h3>
        </div>
    );
};

export default Product;