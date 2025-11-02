"use client";
import React, { useState } from "react";

function Mobile() {
  const [value, setValue] = useState("09");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // فقط عدد مجاز است
    if (!/^\d*$/.test(inputValue)) return;

    // فقط اگر با 09 شروع شود
    if (!inputValue.startsWith("09")) return;

    // حداکثر 11 رقم مجاز است
    if (inputValue.length <= 11) {
      setValue(inputValue);
    }
  };
  return (
    <form>
      <p className="text-2xl font-semibold text-textColor mb-2.5">
        ورود یا ثبت نام
      </p>
      <p className="mb-7 text-textColor text-sm">
        لطفا شماره موبایل خود را وارد کنید
      </p>
      <div className=" relative pt-3 mb-[25px]">
        <input
          className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[350px] rounded-[8px] h-[48px] border border-strokeColor"
          pattern="09\d{9}"
          type="tel"
          value={value}
          onChange={handleChange}
          maxLength={11}
          name=""
          id=""
        />
        <div className=" absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
          شماره موبایل
        </div>
      </div>
      <div>
        <button
          type="submit"
          className=" cursor-pointer mb-2 w-full h-[48px] bg-primaryColor rounded-[8px] text-white text-base font-medium"
        >
          تایید و ادامه
        </button>
        <button className=" cursor-pointer w-full h-[48px] bg-white rounded-[8px] text-primaryColor border border-primaryColor text-base font-medium">
          ورود با نام کاربری
        </button>
      </div>
      <div>
        <div className=" flex text-xs mt-4 justify-center">
          <p className="text-[#9F9F9F]">با ورود و ثبت نام در سایت ، با</p>
          <p className="px-0.5 text-primaryColor">قوانین ایونتی</p>
          <p className="text-[#9F9F9F]">موافقت می کنم</p>
        </div>
      </div>
    </form>
  );
}

export default Mobile;
