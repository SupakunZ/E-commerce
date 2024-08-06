import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center pt-[40px] gap-[50px]'>
      <div className="footer-logo flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className='text-[#383838] text-[46px] font-medium'>SHOPPER</p>
      </div>
      <ul className='footer-links flex list-none gap-[50px] text-[#252525] text-[18px]'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px]">
        <div className="foot-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-solid border-[1px] border-[#ebebeb]">
          <img src={instagram_icon} alt="" srcset="" />
        </div>
        <div className="foot-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-solid border-[1px] border-[#ebebeb]">
          <img src={pintester_icon} alt="" srcset="" />
        </div>
        <div className="foot-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-solid border-[1px] border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" srcset="" />
        </div>
      </div>

      <div className="foot-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[18px]">
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer