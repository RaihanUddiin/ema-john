import React, { useEffect, useState } from 'react';
import './Shop.css';
import Prodct from '../Product/Prodct';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
             
                    {
                        products.map(product=><Prodct product={product} key={product.id}></Prodct>)
                    }
              
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>

        </div>
    );
};

export default Shop;