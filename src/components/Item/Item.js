import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Item.css'
const Item = (props) => {
    const {img,name,price} = props.item;

    return (
        <div className='item'>
         <img src={img} alt="" />
         <h4>Name: {name}</h4>
         <h4>price: ${price}</h4>
         <button onClick={() => props.productInformation(props.item)}>
            <p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}/>
         </button>
        </div>
    );
};
export default Item;