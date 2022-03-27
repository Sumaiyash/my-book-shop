import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name } = props.item;


    return (
        <div>

            <div className='cart-name'>
                <h4>Name:{name}</h4>
            </div>





        </div>
    );
};

export default Cart;