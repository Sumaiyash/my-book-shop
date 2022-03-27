import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log('clicked')
        const newCart = [...cart, product.name]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        product={product}
                        cart={cart}
                        key={product.id}



                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;