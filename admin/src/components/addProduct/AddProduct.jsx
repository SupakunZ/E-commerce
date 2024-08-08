import React from 'react'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  return (
    <>
      <div className='add-product box-border w-full max-w-[800px] p-[30px_50px] m-[20px_30px] rounded-[6px] bg-white'>
        <div className="product-itemfield w-full text-[#7b7b7b] text-[16px]">
          <p>Product title</p>
          <input className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border-solid border-[1px] text-[14px] border-[#c3c3c3] text-[#7b7b7b]' type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price flex gap-[40px]">
          <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
            <p>Price</p>
            <input className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border-solid border-[1px] text-[14px] border-[#c3c3c3] text-[#7b7b7b]' type="text" name='old_price' placeholder='Type here' />
          </div>
          <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
            <p>Offer Price</p>
            <input className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border-solid border-[1px] text-[14px] border-[#c3c3c3] text-[#7b7b7b]' type="text" name='new_price' placeholder='Type here' />
          </div>
        </div>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
          <p>Product Category</p>
          <select name='category' className='add-product-selector'>
            <option value='women'>Women</option>
            <option value='men'>Men</option>
            <option value='women'>Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
          <label htmlFor='file-input'>
            <img src={upload_area} className='addproduct-thumnail-img' alt="" />
          </label>
          <input className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border-solid border-[1px] text-[14px] border-[#c3c3c3] text-[#7b7b7b]' type="file" name="image" id="file-input" hidden />
        </div>
        <button className='addproduct-btn'>ADD</button>
      </div>
    </>
  )
}

export default AddProduct