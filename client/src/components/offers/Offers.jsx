import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers w-[79%] h-[60vh] bg-gradient-to-b from-[#fde1ff] from 0% to-[#e1ffea22] from 60%  flex m-auto px-[140px] mb-[150px]'>
      <div className="offers-left flex tracking-[-1px] flex-1 flex-col justify-center">
        <h1 className='text-[#171717] text-[78px] font-medium'>Exclusive</h1>
        <h1 className='text-[#171717] text-[78px] font-medium'>Offers For You</h1>
        <p className=' text-[#171717] text-[20px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[282px] h-[70px] mt-[30px] cursor-pointer border-none rounded-[35px] bg-[#ff4141] text-[white] text-[20px] font-medium'>Check Now</button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-center pt-[50px]">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers