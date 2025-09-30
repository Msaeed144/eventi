import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='mt-6 w-full'>
        <div className='bg-white rounded-md h-24 flex justify-between pr-12 pl-6'>
            <div className='flex justify-around w-1/2'>
                <Image src="/images/logo.svg" width={109} height={40} alt="لوگو" />
                <div className=' relative my-auto'>
                    <input className='mr-4 text-[#9D9D9D] text-sm w-96 border-strokeColor border rounded-lg pr-4 pl- py-2' type="text" placeholder='جستجو عنوان یا دسته بندی رویداد' />
                    <div className='  absolute top-2 left-2'>
                        <Image src="/images/icons/search.svg" width={20} height={20} alt="جستجو" />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className=' cursor-pointer w-40 flex justify-center border border-strokeColor items-center rounded-sm py-2'>
                    <span className=' ml-2'>ثبت نام / ورود</span>
                    <Image className='mt-1' src="/images/icons/login.svg" width={20} height={20} alt="ورود" />
                </div>
                <div className='cursor-pointer w-40 justify-center flex bg-primaryColor text-white items-center rounded-sm py-2'>
                    <span className='ml-3'>ایجاد رویداد</span>
                    <Image src="/images/icons/left-arrow.svg" width={20} height={20} alt="ورود" />
                </div>
            </div>
        </div>
        <div className='bg-tertiaryColor flex justify-between px-8 py-3 w-[95%] rounded-b-md mx-auto'>
                <ul className='flex justify-around w-1/2 font-medium text-base'>
                    <li className=' cursor-pointer'>کسب و کار</li>
                    <li className=' cursor-pointer'>آموزشی</li>
                    <li className=' cursor-pointer'>علوم انسانی</li>
                    <li className=' cursor-pointer'>مدیریت</li>
                    <li className=' cursor-pointer'>رسانه</li>
                    
                </ul>
            <div>
                <div className=' relative'>
                    <Image src="/images/icons/basket.svg" width={28} height={28} alt="ورود" />
                    <div className=' absolute text-xs bottom-4 right-5 text-white bg-primaryColor rounded-full h-4 w-4 flex justify-center items-center'><span className='mt-1'>1</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header