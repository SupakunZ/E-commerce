import React from 'react'

const LoginSingup = () => {
  return (
    <div className='loginsignup w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]'>
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto p-[32px_60px]">
        <h1 className='text-[30px] font-medium mt-[15px]'>Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
          <input className='h-[62px] w-[100%] pl-[20px] outline-none text-[16px] text-[#5c5c5c] border-solid border-[1px] border-[#c9c9c9]' type="text" placeholder='Your Name' />
          <input className='h-[62px] w-[100%] pl-[20px] outline-none text-[16px] text-[#5c5c5c] border-solid border-[1px] border-[#c9c9c9]' type="email" placeholder='Email Address' />
          <input className='h-[62px] w-[100%] pl-[20px] outline-none text-[16px] text-[#5c5c5c] border-solid border-[1px] border-[#c9c9c9]' type="password" placeholder='Password' />
        </div>
        <button className='w-[100%] h-[62px] text-white bg-[#ff4141] mt-[30px] border-none text-[18px] font-medium cursor-pointer'>Continue</button>
        <p className='loginsignup-login mt-[20px] text-[#5c5c5c] text-[14px] font-medium'>Already have an account <span className='text-[#ff4141] font-semibold'>Login here</span></p>
        <div className="loginsignup-agree flex items-center my-[20px] gap-[20px] text-[#5c5c5c] text-[14px] font-medium">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup