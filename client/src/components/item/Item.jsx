import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[280px] hover:scale-[1.05] transition duration-[0.6s]'>
      <Link to={`/product/${props.id}`}>
        <img className='w-[280px]' onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className='my-[6px]'>{props.name}</p>
      <div className="item-prices flex gap-[20px]">
        <div className="item-price-new text-[#374151] text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item