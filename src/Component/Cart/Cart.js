import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name } = props.item;

    // const handelRandom = cart => {
    //     const randomCart = cart[Math.floor(Math.random() * cart.length)];
    //     console.log(randomCart);
    // }
    return (
        <div>

            <div className='cart-name'>
                <h4>Name:{name}</h4>
            </div>





        </div>
    );
};

export default Cart;