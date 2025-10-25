'use client'
import React, { useState } from "react";

function Login() {
  const [ lastNameFocused , setLastNameFocused ] = useState(false)
  const [ firstNameFocused , setFirstNameFocused ] = useState(false)
  return (
    <form>
      <p className="text-2xl font-semibold text-textColor mb-[22px] ">
        لطفا اطلاعات زیر را وارد کنید
      </p>
      <div className="flex justify-between gap-2">
        <div>
          <div className=" relative pt-3 mb-[25px]">
            <input
              onFocus={() => setFirstNameFocused(true)}
              onBlur={() => setFirstNameFocused(false)}
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[171px] rounded-[8px] h-[48px] border border-strokeColor"
              type="text"
              name="firstName"
              id="firstName"
            />
            <label htmlFor="firstName" className={` absolute top-0.5 right-3 font-normal bg-white px-1 transition-all duration-200 ${firstNameFocused ?"text-[10px] " :"text-[14px] "}`}>
              نام
            </label>
          </div>
        </div>
        <div>
          <div className=" relative pt-3 mb-[25px]">
            <input
              onFocus={() => setLastNameFocused(true)}
              onBlur={() => setLastNameFocused(false)}
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[171px] rounded-[8px] h-12 border border-strokeColor"
              type="text"
              name="lastName"
              id="lastName"
            />
            <label htmlFor="lastName" className={` cursor-text absolute right-2 text-[#667085]  font-normal bg-white px-1 transition-all duration-200 ${lastNameFocused  ?  "translate-y-[-10px] text-[11px]" : "translate-y-3 text-[14px]"}`}>
              نام خانوادگی
            </label>
          </div>
        </div>
      </div>
      <div className="  flex justify-between gap-2">
        <div className="relative">
          <select
            className="customSelect p-4 border border-strokeColor w-[171px] h-12"
            name=""
            id=""
          >
            <option value=""></option>
          </select>
          <div className=" absolute -top-1.5 right-3 text-[14px] font-normal bg-white px-1">
            استان
          </div>
        </div>
        <div className="relative">
          <select
            className="customSelect p-4 border border-strokeColor w-[171px] h-12"
            name=""
            id=""
          >
            <option value=""></option>
          </select>
          <div className=" absolute -top-1.5 right-3 text-[14px] font-normal bg-white px-1">
            شهرستان
          </div>
        </div>
      </div>
       <div className=" relative pt-3 mt-[10px] mb-[22px]">
            <input
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[350px] rounded-[8px] h-12 border border-strokeColor"
              type="text"
              name=""
              id=""
            />
            <div className=" text-[#667085] absolute bottom-4 right-3 text-[14px] font-normal bg-white px-1">
               رمز عبور دلخواه
            </div>
          </div>
           <button
          type="submit"
          className=" cursor-pointer mb-2 w-full h-[48px] bg-primaryColor rounded-[8px] text-white text-base font-medium">
            ثبت نام و ورود
        </button>
    </form>
  );
}

export default Login;
