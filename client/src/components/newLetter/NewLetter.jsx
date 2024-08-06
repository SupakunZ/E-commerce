import React from 'react'
import './newletter.css'

const NewLetter = () => {
  return (
    <div className='newsletter w-[80%] h-[40vh] flex flex-col bg-gradient-to-b from-[#fde1ff] from 0% to-[#e1ffea22] from 60% items-center justify-center m-auto px-[140px] mb-[150px] gap-[30px]'>
      <h1 className='text-[#454545] text-[55px] font-medium'>Get Exclusive Ofeers On Your Email</h1>
      <p className='text-[#454545] text-[18px]'>Subscribe to our newletter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-solid border-[1px] border-[#e3e3e3]'>
        <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[14px]' type="email" placeholder='Your Email id' />
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter