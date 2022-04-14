import { faGuitar, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h3 className='heading'>Order Summary</h3>
            {/* add to cart button e click korle ekhane 4 ta item create hoye dekhabe 
             **button thakbe for choose one iteem 
             **button thakbe for clear cart or refresh cart 
            */}

            <button className='choose-button button'>
                <p>Choose One Guitar</p>
                <FontAwesomeIcon className='icon' icon={faGuitar}></FontAwesomeIcon>
            </button>
            <button className='refresh-button button'>
                <p>Let's Select Again</p>
                <FontAwesomeIcon className='icon' icon={faRotate}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;