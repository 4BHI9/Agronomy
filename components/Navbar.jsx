import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import fire from '../pages/api/fire';


const Navbar = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><h1>Agronomy</h1></Link>
      </p>
      
   
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button><p><button className="jod" onClick={handleLogout}>LogOut</button></p>


      {showCart && <Cart />}
    </div>
  )
}

export default Navbar