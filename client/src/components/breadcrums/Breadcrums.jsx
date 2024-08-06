import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'
import './breadcrums.css'

const Breadcrums = (props) => {
  const { product } = props
  return (
    <div className='breadcrum flex items-center gap-[8px] text-[#5e5e5e] text-[14px] font-medium m-[45px_150px] capitalize'>
      HOME <img className='inline' src={arrow_icon} alt="" /> SHOP <img className='inline' src={arrow_icon} alt="" /> {product.category} <img className='inline' src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums