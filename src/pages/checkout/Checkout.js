import React, { useContext, useState } from "react";
import PRODUCTS from "../shop/products";
import { ShopContext } from "../../contexts/ShopContext";
import CartItems from "../cart/CartItems";
import { Link } from "react-router-dom";
import NavShopUser from "../shop/NavShopUser";
import './checkout.css';
import { useNavigate} from 'react-router-dom';


const Checkout = () => {

  const[details, setDetails] = useState({
    cardNumber: '',
    expairyDate: '',
    verificationCode:'',
    nameCardholder:''

  })

  const[error, setError] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => {
    const{name, value} = e.target;
   
    setDetails((prev) => {
      return { ...prev , [name] : value};
    });
  };

 

      
  
  function handleSubmit(e){
    e.preventDefault();
    if(details.cardNumber.length === 0 || details.cardNumber.length < 14){
      setError(true);
    }
     else if(!details.expairyDate.length ===3 ||details.expairyDate.length > 3){
      setError(true);
      alert(" Verification Code should be 3 digit")
    }
    else if (details.nameCardholder.length <= 5 ){
      setError(true)
      alert("Card Holder name must be more than 5 letter.")
    }
    else if(details.expairyDate === Number("2024-4-5" ) || details.expairyDate > Number("2024-4-5" )){
      setError(true)
      alert("Invalid Expairy Date")
    }
   else{
    navigate('/productorder');
   }


  }

  return (

    <div>
      <NavShopUser />

      <h2>Checkout Page</h2>
      <form onSubmit={handleSubmit}>
      <div className="container-checkout">
        <div className="cardNumber">Card Number<input className="inputCardNumber"onChange={handleChange} value={details.cardNumber} type="number" name="cardNumber" placeholder="Card Number" ></input></div><br/>
        {error? <label>Card Number  field should not be empty; Or less than 14 digit</label>: " "}

        <div className="expairyDate">Expires At.<input className="inputExpairyDate" onChange={handleChange} value={details.expairyDate} type="date" placeholder="Expairy Date" name="expairyDate"/></div>
        <div className="varificationCode">Last 3 Digit<input className="inputVarificationCode"  onChange={handleChange} value={details.verificationCode} type="number" name="verificationCode" placeholder=" ver.num"></input></div>
        <div className="nameCardholder">Card Holder Name<input className="inputNameCardholder" onChange={handleChange} value={details.nameCardholder} type="text" name="nameCardholder" placeholder="name of cardholder"/></div>
      </div>
      <button type='submit'>Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
