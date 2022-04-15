import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedItem.css';

const SelectedItem = (props) => {
    const {name, img} = props.SelectedItem;
    return (
        <div className='selected-item'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default SelectedItem;