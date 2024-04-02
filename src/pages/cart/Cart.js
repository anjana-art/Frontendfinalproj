import React , {useContext} from 'react'
import  PRODUCTS  from '../shop/products'
import { ShopContext } from "../../contexts/ShopContext";
import CartItems from './CartItems';
import "./cart.css";
import {Link} from 'react-router-dom';
import NavCart from './NavCart';

const Cart = () => {
    const {cartItems ,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  return (
    <div>
      <NavCart/>
        <div className='title'><h1>Your Cart</h1></div>
        <div className='cart'>
            {PRODUCTS.map((product)=> {
                if(cartItems[product.id] !==0) {
                     return <CartItems data={product}/>;
                }
            })}

        </div>
        <div className='total'>
            <h3>Total Amount: {getTotalCartAmount()}  eur</h3>
            <button><Link to = '/shop'>Continue Shopping</Link></button>
            <button>Checkout</button>
            </div>  

    </div>
  )
}

export default Cart
