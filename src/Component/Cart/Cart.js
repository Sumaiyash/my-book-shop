import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, picture } = props.item;


    return (
        <div>

            <div className='cart-name'>
                <h4>Name:{name}</h4>
                <img className='cart-img' src={picture} alt="" />
            </div>





        </div>
    );
};

export default Cart;