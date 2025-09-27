import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='mt-8 w-full'>
        <div className='bg-white rounded-md flex justify-between pr-12 pl-6 py-6'>
            <div className='flex justify-around w-1/2'>
                <Image src="/images/logo.svg" width={109} height={40} alt="لوگو" />
                <div className=' relative'>
                    <input className=' text-[#9D9D9D] text-sm w-96 border-strokeColor border rounded-lg pr-4 pl- py-2' type="text" placeholder='جستجو عنوان یا دسته بندی رویداد' />
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
        <div className='bg-tertiaryColor'>
            
        </div>
    </div>
  )
}

export default Header