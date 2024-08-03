import React, { createContext, useState } from 'react'
import all_product from '../components/assets/all_product'

// create useContext
export const ShopContext = createContext(null) // ชื่อ Stones ที่จะเรียกใช้

// func get id สินค้าทุกอัน
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0; // { Allproduct_ID (key) : 0 (value) }
  }
  return cart
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  // Function เพิ่มลบของลงในตะกร้า
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    // {cart ( Object จาก getDefaultCart ), key( ID ตัวที่จะเปลี่ยน ) : value( ค่าที่จะรับมาใหม่ +1 ) }
    console.log(cartItems)
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // {cart ( Object จาก getDefaultCart ), key( ID ตัวที่จะเปลี่ยน ) : value( ค่าที่จะรับมาใหม่ -1 ) }
  }

  // Stones Context
  const contextValue = { all_product, cartItems, addToCart, removeFromCart } // all_product data 


  // console.log(addToCart(1))

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider