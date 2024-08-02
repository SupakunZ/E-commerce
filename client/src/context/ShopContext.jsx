import React, { createContext } from 'react'
import all_product from '../components/assets/all_product'

// create useContext
export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

  const contextValue = { all_product } // all_product data 

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider