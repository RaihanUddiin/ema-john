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
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart=[];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    const handleAddToCart = (product) => {

        // const newCart = [...cart, product];
        let newCart=[];
        const exists = cart.find(pd=>pd.id===product.id);
        if(!exists){
            product.quantity=1;
            newCart=[...cart,product]
        }
        else{
            exists.quantity=exists.quantity+1;
            const remaining=cart.filter(pd=>pd.id!=product.id);
            newCart=[...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id);


    }
    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Prodct
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