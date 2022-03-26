import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, []);

    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
                <div className="card-container">
                    <h2>Order Summary</h2>
                </div>

            </div>
        </div>
    );
};

export default Shop;