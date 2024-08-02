import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/breadcrums/Breadcrums'
import { ShopContext } from '../context/ShopContext'
import ProductDisplay from '../components/productDisplay/ProductDisplay'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams() // get params at url
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product