import React from 'react'
import Image from 'next/image'

function MiniPoster() {
  return (
    <div className='h-80'>
        <Image src="/images/pics/poster.png" width={250} height={320} alt="پوستر" />
    </div>
  )
}

export default MiniPoster