import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("")

  return (
    <div className=' flex justify-around py-[2.5rem] shadow-[0px_1px_3px_-2px_black]'>
      <div className="nav-logo flex items-center gap-[10px]">
        <img src={logo} alt="" />
        <p className='text-[#171717] text-[36px] font-semibold'>SHOPPER</p>
      </div>
      <ul className='nav-menu flex items-center list-none gap-[50px] text-[#626262] text-[18px] font-medium'>
        <li onClick={() => { setMenu("shop") }}><Link to={'/'}>Shop</Link> {menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("men") }}><Link to={'/mens'}>Men</Link> {menu === "men" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("women") }}><Link to={'/womens'}>Women</Link> {menu === "women" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("kids") }}><Link to={'/kids'}>Kids</Link> {menu === "kids" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px] cursor-pointer">
        <Link to={'/login'}>
          <button className='active:bg-[#f3f3f3] w-[157px] bg-white h-[58px] outline-none border-[1px] border-black rounded-[75px] text-[18px] text-[#515151] font-medium'>Login</button>
        </Link>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count w-[22px] h-[22px] bg-red-500 flex justify-center items-center rounded-[11px] text-white text-[14px] mt-[-35px] ml-[-55px]">0</div>
      </div>
    </div>
  )
}

export default Navbar