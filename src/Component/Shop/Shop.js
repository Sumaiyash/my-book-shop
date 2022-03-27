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

            <div className='question-container'>
                <h2>Question 1</h2>
                <h4>How react work</h4>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development.
                    Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface
                    (UI) building called components. One of the biggest advantages of using React is that we can infuse HTML code
                    with JavaScript. In react Users can create a representation of a DOM node by declaring the Element function in
                    React. The syntax of the HTML code in react is similar to XML. In react instead of using the traditional DOM
                    class, React uses className. JSX tags have a name, children, and attributes.Numeric values and expressions must
                    be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to
                    JavaScript. In most cases, React is written using JSX instead of standard JavaScript to simplify components
                    and keep code clean.
                </p>

                <h2>Question 2</h2>
                <h4>Props vs State</h4>
                <p><b>State</b>
                    The state is a changeable structure that contains data or information about the component and can change over
                    time. A change in state can occur as a result of a user action or a system event. It is the react component's
                    heart that determines the component's behavior and how it will render. A state should be as simple as
                    possible. It represents the local state or information of the component. It can only be accessed or modified
                    within the component or directly by the component.
                    <br />
                    <b>Props</b>
                    Props are components that are read-only. It is an object that stores the value of a tag's attributes and
                    functions similarly to HTML attributes. It allows data to be passed from one component to another. It is
                    similar to function arguments and can be passed to the component in the same way that function arguments can
                    Because props are immutable, we cannot change them from within the component.
                </p>
            </div>
        </div>

    );

};



export default Shop;