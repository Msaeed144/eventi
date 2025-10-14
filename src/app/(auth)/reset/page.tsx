"use client";
import React, { useState } from "react";
import Image from "next/image";

function Reset() {
  // state برای اینپوت اول
  const [visible1, setVisible1] = useState(false);
  const [invisible1, setInvisible1] = useState(true);
  const [inputType1, setInputType1] = useState<"password" | "text">("password");

  // state برای اینپوت دوم
  const [visible2, setVisible2] = useState(false);
  const [invisible2, setInvisible2] = useState(true);
  const [inputType2, setInputType2] = useState<"password" | "text">("password");

  // تابع تغییر نمایش رمز اول
  const passVisible1 = () => {
    if (inputType1 === "password") {
      setInputType1("text");
      setVisible1(true);
      setInvisible1(false);
    } else {
      setInputType1("password");
      setVisible1(false);
      setInvisible1(true);
    }
  };

  // تابع تغییر نمایش رمز دوم
  const passVisible2 = () => {
    if (inputType2 === "password") {
      setInputType2("text");
      setVisible2(true);
      setInvisible2(false);
    } else {
      setInputType2("password");
      setVisible2(false);
      setInvisible2(true);
    }
  };

  return (
    <form>
      <p className="text-2xl font-semibold text-textColor mb-2.5">
تعریف رمز عبور جدید      </p>
      <p className="mb-7 text-textColor text-sm">رمز عبور دلخواه خود را وارد کنید</p>

      <div className="relative pt-3 mb-[25px]">
        <input
          className="pr-12 focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[350px] rounded-[8px] h-[48px] border border-strokeColor"
          type={inputType1}
          id="password"
          name="password"
          autoComplete="current-password"
        />

        <div className="absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
رمز عبور جدید        </div>

        <div className={`absolute top-6 right-4 ${invisible1 ? "" : "hidden"}`}>
          <Image
            className="cursor-pointer"
            onClick={passVisible1}
            src="/images/icons/invisible.svg"
            width={24}
            height={24}
            alt="غیر قابل مشاهده"
          />
        </div>

        <div className={`absolute top-7 right-4 ${visible1 ? "" : "hidden"}`}>
          <Image
            className="cursor-pointer"
            onClick={passVisible1}
            src="/images/icons/visible.svg"
            width={24}
            height={24}
            alt="قابل مشاهده"
          />
        </div>
      </div>

      <div className="relative pt-3 mb-[25px]">
        <input
          className="pr-12 focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[350px] rounded-[8px] h-[48px] border border-strokeColor"
          type={inputType2}
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="off"
        />

        <div className="absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
          تکرار رمز عبور
        </div>

        <div className={`absolute top-6 right-4 ${invisible2 ? "" : "hidden"}`}>
          <Image
            className="cursor-pointer"
            onClick={passVisible2}
            src="/images/icons/invisible.svg"
            width={24}
            height={24}
            alt="غیر قابل مشاهده"
          />
        </div>

        <div className={`absolute top-7 right-4 ${visible2 ? "" : "hidden"}`}>
          <Image
            className="cursor-pointer"
            onClick={passVisible2}
            src="/images/icons/visible.svg"
            width={24}
            height={24}
            alt="قابل مشاهده"
          />
        </div>
      </div>
      <button
        type="submit"
        className=" cursor-pointer mb-2 w-full h-[48px] bg-primaryColor rounded-[8px] text-white text-base font-medium"
      >
        تايید و ادامه
      </button>
    </form>
  );
}

export default Reset;
