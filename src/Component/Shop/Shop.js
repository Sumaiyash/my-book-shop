import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = () => {
        console.log('clicked')
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        product={product}
                        key={product.id}



                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;