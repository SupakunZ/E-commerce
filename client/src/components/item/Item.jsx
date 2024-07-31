import React from 'react'

const Item = (props) => {
  return (
    <div className='item w-[350px] hover:scale-[1.05] transition duration-[0.6s]'>
      <img src={props.image} alt="" />
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