import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.Product);
    const { name, picture, price } = props.product;
    return (
        <div className='producst-details'>

            <img className='product-img' src={picture} alt="" />


            <h5 className='product-name'>{name}</h5>
            <p className='product-price'> Price :${price}</p>
            <button> Add To Cart</button>


        </div>

    );
};

export default Product;