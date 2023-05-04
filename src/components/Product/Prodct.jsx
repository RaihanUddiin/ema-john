import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
const Prodct = (props) => {
    const { id, img, name, price, seller, ratings } = props.product;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufracturar: {seller}</p>
                <p><small>Rating: {ratings}</small></p> 
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
        </div>
    );
};

export default Prodct;