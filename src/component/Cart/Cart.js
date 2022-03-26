import React, { useState }  from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const[item, setItem] = useState();

    const handleItem = (product)=>{
        console.log(product);
        const newItem = [...item, product];
        setItem(newItem);
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items:{cart.length}</p>
                <p>Selected Products:
                    { cart.map(item => {
                        return ( <span key={item.id} className='block'>{item.name}</span> );
                     })}
                </p>
            <button onClick={() =>handleItem(item)}>
                <p>Choose 1 Item From Here</p>
            </button>
        </div>
    );
};

export default Cart;