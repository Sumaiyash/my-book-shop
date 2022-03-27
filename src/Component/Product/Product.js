import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.Product);
    const { name, picture, price } = props.product;

    return (
        <div className='producst-details'>

            <img className='product-img' src={picture} alt="" />

            <h5 className='product-name'>{name}</h5>

            <p className='product-price'> Price :${price}</p>

            <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
                <p className='btn-txt'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>


        </div>

    );
};

export default Product;