import React from 'react'
import Image from 'next/image'

function MiniPoster() {
  return (
    <div className='h-80 xl:w-[30%] w-[280px]'>
        <Image src="/images/pics/poster.png" width={335} height={485} alt="پوستر" />
    </div>
  )
}

export default MiniPoster