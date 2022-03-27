import React from 'react';
import './Cart.css';

const Cart = (cart) => {
    return (
        <div>
            <h1 className='cart-order'>Order Summary</h1>
            <h3 className='cart-selected'>Selected Items  </h3>
            <p> name:{cart}</p>

        </div>
    );
};

export default Cart;