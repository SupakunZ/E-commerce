import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {

  const { all_product, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartitems m-[100px_170px]'>
      <div className="cartitems-format-main grid items-center gap-[75px] py-[20px] text-[#454545] text-[16px] font-semibold grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-[#e2e2e2] border-0' />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) { // เช็ค AllproductID ว่า value ตัวไหนมีค่ามากกว่า 1 
          return <div >
            <div className="cartitems-format grid items-center gap-[75px] py-[20px] text-[#454545] text-[15px] font-medium grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]">
              <img className='carticon-product-icon' src={e.image} alt="" />
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className='cartitems-quantity w-[64px] h-[50px] border-solid border-[2px] border-[#ebebeb] bg-[#FFF]'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className='cartitems-remove-icon w-[15px] mx-[25px] cursor-pointer' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0' />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down flex my-[80px]">
        <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[32px]">
          <h1 className='text-[30px] font-semibold'>cart Totals</h1>
          <div>
            <div className="cartitems-total-item flex justify-between py-[15px]">
              <p>Subtatal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-[15px]">
              <h3 className='text-[19px] font-semibold'>Total</h3>
              <h3 className='text-[19px] font-semibold'>${0}</h3>
            </div>
          </div>
          <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[14px] font-medium cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode flex-1 text-[14px] font-medium">
          <p className='text-[#555]'>If you a promo code, Enter it here</p>
          <div className="cartitems-promobox flex items-center w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
            <input className='border-none outline-none bg-transparent text-[14px] w-[330px] h-[50px]' type="text" placeholder='promo code' />
            <button className='w-[170px] h-[58px] text-[14px] bg-black text-white cursor-pointer'>Submit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CartItem