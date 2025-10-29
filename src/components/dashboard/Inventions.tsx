'use client'
import React, { useState } from 'react'

function Inventions() {
  const [ invetion , setInvention ] = useState({
    title:"",
    status:"",
    seryalNumber:"",
    year:"",
    description:"",
    bonyad:{
      history:false,
      activityReport:" "
    }
  })
  return (
    <div>Inventions</div>
  )
}

export default Inventions