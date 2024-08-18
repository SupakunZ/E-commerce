import React, { createContext, useEffect, useState } from 'react'
import all_product from '../components/assets/all_product' // ** All product **


// create useContext
export const ShopContext = createContext(null) // ชื่อ Stones ที่จะเรียกใช้

// func get id สินค้าทุกอัน --> setProduct
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) { // จำนวนสินค้าทั้งหมด
    cart[index] = 0; // { Allproduct_ID (key) : 0 (value) }
  }
  return cart
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [cartTotal, setCartTotal] = useState(0)
  const URL = import.meta.env.VITE_APP_API

  // const [all_product, setAll_product] = useState([])

  useEffect(() => {
    // fetch(`${URL}/allproducts`)
    //   .then(res => res.json())
    //   .then(data => setAll_product(data))

    if (localStorage.getItem('auth-token')) {
      fetch(`${URL}/getcart`, {
        method: "POST",
        headers: {
          Accept: 'application/from-data',
          'auth-token': `${localStorage.getItem('auth-token')}`, //ส่ง token ไปเพื่อตรวจสอบ
          'Content-Type': 'application/json'
        },
        body: ""
      }).then(req => req.json()).then(data => setCartItems(data))
    }
  }, [])

  // Function เพิ่มลบของลงในตะกร้า
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    // {cart ( Object จาก getDefaultCart ), key( ID ตัวที่จะเปลี่ยน ) : value( ค่าที่จะรับมาใหม่ +1 ) }
    // console.log(cartItems)

    // ** Check login ** --> have token
    if (localStorage.getItem('auth-token')) {
      fetch(`${URL}/addtocart`, {
        method: "POST",
        headers: {
          Accept: 'application/from-data',
          'auth-token': `${localStorage.getItem('auth-token')}`, //ส่ง token ไปเพื่อตรวจสอบ
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "itemId": itemId }) // ส่ง id ไปเพื่อตรวจสอบ
      }).then(req => req.json()).then(data => console.log(data))
    }
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // {cart ( Object จาก getDefaultCart ), key( ID ตัวที่จะเปลี่ยน ) : value( ค่าที่จะรับมาใหม่ -1 ) }

    // ** Check login ** --> have token
    if (localStorage.getItem('auth-token')) {
      fetch(`${URL}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: 'application/from-data',
          'auth-token': `${localStorage.getItem('auth-token')}`, //ส่ง token ไปเพื่อตรวจสอบ
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "itemId": itemId })
      })
    }
  }


  // Function รวมราคาสินค้าทั้งหมด
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) { // loop สิ้นค้าทั้งหมดที่อยู่ในตะกร้าแล้วเอาไปเทียบกับสิ้นค้าทั้งหมดเพื่อหาผมรวมจำนวนราคา
      if (cartItems[item] > 0) { // ถ้าในตะกร้ามีสินค้ามากกว่า 1 --> setuseState
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
        setCartTotal(totalAmount)
      } if (totalAmount === 0) { // ถ้าในตะกร้ามีสินค้า = 0 --> setuseState(0)
        setCartTotal(0)
      }
      // return totalAmount
    }
  }

  // Function จำนวนสินค้าในตระกร้า
  const getTotalCartItems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      totalItem += cartItems[item]
    }
    return totalItem
  }
  // Stones Context
  const contextValue = { getTotalCartItems, cartTotal, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } // all_product data 


  // console.log(addToCart(1))

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider