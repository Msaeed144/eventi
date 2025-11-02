import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <div className='container mx-auto mb-2 flex flex-col items-center text-textColor'>
        <div className='flex gap-4 mb-3'>
            <div>
                <Image src="/images/icons/instagram.svg" width={22} height={22} alt='اینستاگرام' />
            </div>
            <div>
                <Image src="/images/icons/bale.svg" width={22} height={22} alt='اینستاگرام' />
            </div>
                        <div>
                <Image src="/images/icons/telegram.svg" width={22} height={22} alt='اینستاگرام' />
            </div>
                        <div>
                <Image src="/images/icons/eiita.svg" width={22} height={22} alt='اینستاگرام' />
            </div>
        </div>
        <div>
            <p>تمامی حقوق متعلق به مجموعه ترجمان گام دوم می‌باشد.</p>
        </div>
    </div>
  )
}

export default Footer