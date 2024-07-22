import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from './../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  let {cartItems,food_list,removeFromCart,getTotalCartAmt}=useContext(StoreContext)
  let navigate=useNavigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0) {
            return(
             <div>
               <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr/>
             </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
            <h2>Cart Total</h2>
            <div>
              <div className='cart-total-details'>
                <p>Sub Total</p>
              <p>$ {getTotalCartAmt()}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>$ {getTotalCartAmt()===0?0:2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <b>Total</b>
                <b>$ {getTotalCartAmt()===0?0: getTotalCartAmt()+2}</b>
              </div>
              <hr/>
             
            </div>
            <button onClick={()=>{navigate("/order")}}>Proceed To Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promocode enter it here.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
