import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero h-screen flex bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]'>
      <div className="hero-left flex flex-1 flex-col justify-center leading-[1.1] gap-[20px] pl-[180px]">
        <h2 className='text-[#090909] text-[24px] font-semibold'>NEEW ARRIVALS ONLY</h2>
        <div className='tracking-[-1px]'>
          <div className="hero-hand-icon flex items-center gap-[20px]">
            <p className='text-[#171717] text-[96px] font-medium'>new</p>
            <img className='w-[100px]' src={hand_icon} alt="" />
          </div>
          <p className='text-[#171717] text-[98px] font-medium'>collections</p>
          <p className='text-[#171717] text-[98px] font-medium'>for everyone</p>
        </div>
        <div className="cursor-pointer hero-lastest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-[white] text-[20px] font-medium">
          <div>Last Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex flex-1 items-center justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero