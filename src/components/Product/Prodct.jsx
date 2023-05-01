import React from 'react';
import "./Product.css";
const Prodct = (props) => {
    const { id, img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufracturar: {seller}</p>
                <p><small>Rating: {ratings}</small></p> 
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Prodct;