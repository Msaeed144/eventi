'use client'

import React, { useRef, useState } from 'react'

export default function Verify() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const [code, setCode] = useState('')

  const goNext = (idx: number) => {
    if (idx < inputRefs.current.length - 1) inputRefs.current[idx + 1]?.focus()
  }
  const goPrev = (idx: number) => {
    if (idx > 0) inputRefs.current[idx - 1]?.focus()
  }

  const recomputeCode = () => {
    const value = inputRefs.current.map(el => el?.value ?? '').join('')
    setCode(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const v = e.target.value.replace(/\D/g, '')
    e.target.value = v.slice(0, 1)
    if (e.target.value) goNext(index)
    recomputeCode()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value) {
      goPrev(index)

    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '')
    if (!text) return
    e.preventDefault()
    for (let i = 0; i < text.length && index + i < inputRefs.current.length; i++) {
      const el = inputRefs.current[index + i]
      if (el) el.value = text[i]
    }
    const next = Math.min(index + text.length, inputRefs.current.length - 1)
    inputRefs.current[next]?.focus()
    recomputeCode()
  }

  const inputs = [0, 1, 2, 3, 4]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalCode = inputRefs.current.map(el => el?.value ?? '').join('')
    console.log('OTP:', finalCode)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-2xl font-semibold text-textColor mb-2">کد تایید را وارد کنید</p>
      <p className="text-sm text-textColor mb-5">
        کد تایید به شماره <span className="mx-1 text-black">09353806896</span> ارسال شد
      </p>

      <div className="flex gap-[18px] justify-center mb-6" dir="ltr">
        {inputs.map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-14 h-14 text-center border-2 border-strokeColor rounded-[8px] text-xl focus:border-blue-500 outline-none"
            ref={(el) => { inputRefs.current[i] = el }}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e, i)}
            autoFocus={i === 0}
          />
        ))}
      </div>
      <div className='flex justify-between mb-[11px]'>
        <p className='text-sm text-textColor'>
          <span className='pl-1 text-primaryColor'>2:30</span>
          تا دریافت مجدد کد
        </p>
        <p className='text-sm text-textColor cursor-pointer'>
          ویرایش شماره موبایل
        </p>
      </div>
      <button
        type="submit"
        disabled={code.length !== inputs.length}
        className=" disabled:cursor-not-allowed cursor-pointer w-full h-12 rounded-[8px] bg-primaryColor text-white disabled:opacity-50"
      >
        تایید
      </button>
      <div className='flex justify-center items-center cursor-pointer mt-2 text-primaryColor w-full h-12 rounded-[8px] border border-primaryColor'>
          <p>
            ورود با رمز عبور
          </p>
      </div>
    </form>
  )
}
