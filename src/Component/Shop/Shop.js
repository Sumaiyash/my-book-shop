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
        const newCart = [...cart, product]
        setCart(newCart);
    }
    const chooseForMe = (cart) => {
        const choosen = cart.map(obj => ({ ...obj }));
        var randomItem = choosen[Math.floor(Math.random() * choosen.length)];
        alert(randomItem.name + " will be best for you.");
    }

    const chooseAgain = () => {
        setCart([]);
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

                <h1 className='cart-order'>Order Summary</h1>
                <h3 className='cart-selected'>Selected Items:{cart.length} </h3>

                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }
                <button onClick={() => chooseForMe(cart)} > Selected one for me</button> <br />
                <button onClick={() => chooseAgain(cart)}> Choose Again</button>


            </div>
        </div>
    );
};

export default Shop;