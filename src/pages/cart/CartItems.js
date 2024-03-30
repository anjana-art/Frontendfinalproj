import React , {useContext} from "react";
import { ShopContext } from "../../contexts/ShopContext";


const CartItems = (props) => {
  const {
    id,
    name,
    logo,
    catagory,
    price,
    description,
    featureone,
    featuretwo,
    featurethree,
    featurefour,
  } = props.data;
  const {cartItems, addToCart, removeFromCart,  updateCartItemCount } = useContext(ShopContext);


  return (
    <div className="container-item">
      <div className="image">
        <img src={logo} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="button-quantity">
        <h3>{price}eur</h3>
        <button onClick={() => removeFromCart(id)}>-</button>
        <input className="input" value={cartItems[id]}  onChange={(e) =>  updateCartItemCount(Number(e.target.value), id)}/>
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};

export default CartItems;
