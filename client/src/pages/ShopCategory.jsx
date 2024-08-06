import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item'
import './css/shopcategory.css'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext) // เรียกใช้ data ใน useContext

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block my-[30px] mx-auto w-[82%]' src={props.banner} alt="" srcset="" />
      <div className="shopcategory-indexSort flex mx-[170px] justify-between items-center">
        <p>
          <span className='font-medium'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort  py-[10px] px-[20px] rounded-[40px] border-solid border-[1px] border-[#888]">
          Sort by <img className='inline' src={dropdown_icon} alt="" srcset="" />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-4 place-items-center gap-y-[80px] my-[20px] mx-[170px]">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else { null }
        })}
      </div>
      <div className="shopcategory-loadmore flex items-center justify-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-normal">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory