import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('product.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        let selectedProductId = product.id;
        // let newCart = [];
        const exists = cart.find(product => product.id === selectedProductId)
        if(!exists) {
            const newCart = [...cart, product];
            if(newCart.length <= 4) {
                setCart(newCart);
            }
            else{
                console.log('you cannot add more')
            }
        }
        // const newCart = [...cart, product];
        // if(newCart.length <= 4) {
        //     setCart(newCart);
        // }
        // else {
        //     console.log('you cannot add more')
        // }
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
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