import { faGuitar, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SelectedItem from '../Selected Item/SelectedItem';
import './Cart.css';

const Cart = (props) => {
    const arrayOfItems = props.cart;
    return (
        <div className='cart'>
            <h3 className='heading'>Are You Confused?</h3>
            <h3 className='heading'>Select 4 guitar and click the Choose One button:</h3>
            {/* add to cart button e click korle ekhane 4 ta item create hoye dekhabe 
             **button thakbe for choose one iteem 
             **button thakbe for clear cart or refresh cart 
            */}
            <h4>Selected items: {props.cart.length}</h4>
            {
                arrayOfItems.map(item => <SelectedItem SelectedItem={item} ></SelectedItem>)
            }
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