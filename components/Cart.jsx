import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';


import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';








const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const loadScript = (src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement('script')
      script.src = src
  
      script.onload = () =>{
        resolve(true)
      }
      script.onerror= () =>{
        resolve(false)
      }
  
      document.body.appendChild(script)
    })
  
  }
  const displayRazorpay = async (totalPrice) =>{
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
    if(!res){
      alert('you are ofline... failed to load razor pay')
      return
    }
  
    const options = {
      key:"rzp_test_wbR9kgoPXizBcN",
      currenc:"INR",
      amount: totalPrice*100,
      name:"Agronomy",
      description:"thanks for shopping with us",
    
      
      handler: function (response){
        alert(response.razorpay_payment_id)
        alert("payment is successfull")
      }
    };

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  
  

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>INR - {item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>INR - {totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button  type= "button" className="btn" onClick={()=> displayRazorpay(totalPrice)}>
                Pay 
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart