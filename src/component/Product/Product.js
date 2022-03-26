import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name, img, price, id} = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h2 className='product-name'>Name:{name}</h2>
                <p>Price:${price}</p>
                <p>ID:{id}</p>
            </div>
            <button className='btn-card'>
                <p className='btn-text'>Add To Card</p>
            </button>
        </div>
    );
};

export default Product;