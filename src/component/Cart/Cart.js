import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items:{cart.length}</p>
                <p>Selected Products:
                    { cart.map(item => {
                        return ( <span key={item.id} className='block'>{item.name}</span> );
                     })}
                </p>
        </div>
    );
};

export default Cart;