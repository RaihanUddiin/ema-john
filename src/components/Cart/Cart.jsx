import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);


    let total=0;
    let shippingCharge=0;
    let quantity=0;

    for(const product of cart){
        product.quantity=product.quantity || 1;
        total=total+ (product.price*product.quantity);
        shippingCharge=shippingCharge + (product.shipping*product.quantity);
        quantity=quantity+ product.quantity;
    }
    const tax=((total*7)/100);
    const grandTotal=total + shippingCharge + (tax);

    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items : {quantity}</p>
            <p>Total Price : {total}</p>
            <p>Total Shipping Charge : {shippingCharge}</p>
            <p>Total Tax : {tax.toFixed(2)}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;