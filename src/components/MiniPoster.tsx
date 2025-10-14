import React from 'react'
import Image from 'next/image'

function MiniPoster() {
  return (
    <div>
        <Image src="/images/pics/poster.png" width={280} height={400} alt="پوستر" />
    </div>
  )
}

export default MiniPoster