import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const{product, handleAddToCart} = props;
    const{name, img, price, id} = product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h2 className='product-name'>Name:{name}</h2>
                <p>Price:${price}</p>
                <p>ID:{id}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-card'>
                <p className='btn-text'>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;