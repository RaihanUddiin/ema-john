import React, { useEffect, useState } from 'react';
import './Shop.css';
import Prodct from '../Product/Prodct';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(()=>{
        const getCart=getShoppingCart()
        console.log(getCart);
    },[]);
    const handleAddToCart=(product)=>{
        
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
        
        
    }
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='product-container'>
             
                    {
                        products.map(product=><Prodct 
                            product={product} 
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                            ></Prodct>)
                    }
              
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
               
            </div>

        </div>
    );
};

export default Shop;