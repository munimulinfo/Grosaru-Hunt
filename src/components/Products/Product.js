import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import Item from '../Item/Item';
import './Products.css'
const Product = () => {
    const [product, setPrduct] = useState([]);
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setPrduct(data));
    }, []);

    const productInformation = (items) => {
        setItem([...item,items]);
        
    }
    console.log(item);
    return (
        <div className='product-container'>
            <div className='product'>
                {
                    product.map(item => <Item
                        item={item}
                        key={item.id}
                        productInformation={productInformation}
                    ></Item>)
                }
            </div>
            <div className='cart-container'>
       {
        item.map(i => <div className='product-information'>
            <img className='cart-img' src={i.img} alt="" />
            <h3>{i.name}</h3>
            <button><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button>
            </div>)
       }
                <button className='chose-btn'>Chose 1 for me</button><br></br>
                <button className='chose-btn'>Chose again</button>
            </div>
        </div>
    );
};
export default Product;