"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [other, setOther] = useState(false);

  return (
    <div>
      <div className="container mx-auto relative">
        <div className="mt-6 w-full ">
          <div className="bg-white mx-auto rounded-md w-[1240px] h-24 flex justify-between pl-6">
            <div className="flex items-center pr-10 justify-between w-1/2">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  width={109}
                  height={40}
                  alt="لوگو"
                />
              </Link>

              <div className=" relative my-auto">
                <input
                  className="mr-4 text-[#9D9D9D] text-sm w-96 border-strokeColor border rounded-lg pr-4 h-12"
                  type="text"
                  placeholder="جستجو عنوان یا دسته بندی رویداد"
                />
                <div className="  absolute top-[15px] left-3">
                  <Image
                    src="/images/icons/search.svg"
                    width={20}
                    height={20}
                    alt="جستجو"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="ml-4 cursor-pointer w-40 flex justify-center border border-strokeColor items-center rounded-sm h-12">
                <span className=" ml-2">ثبت نام / ورود</span>
                <Image
                  className="mt-1"
                  src="/images/icons/login.svg"
                  width={24}
                  height={24}
                  alt="ورود"
                />
              </div>
              <div className="cursor-pointer w-40 justify-center flex bg-primaryColor text-white items-center rounded-sm h-12">
                <span className="ml-3">ایجاد رویداد</span>
                <Image
                  src="/images/icons/left-arrow.svg"
                  width={20}
                  height={20}
                  alt="ورود"
                />
              </div>
            </div>
          </div>
          <div className="bg-tertiaryColor mx-auto flex justify-between px-8 py-3 w-[1180px] rounded-b-md">
            <ul className="flex justify-around font-medium text-base gap-0 z-40">
              <Link href="/courses">
                <li className=" cursor-pointer border-l border-l-primaryColor pl-6 ml-6">
                  همه ی رویداد ها
                </li>
              </Link>
              <li className=" cursor-pointer pl-11">کسب و کار</li>
              <li className=" cursor-pointer pl-11">آموزشی</li>
              <li className=" cursor-pointer pl-11">علوم انسانی</li>
              <li className=" cursor-pointer pl-11">مدیریت</li>
              <li className=" cursor-pointer pl-11">رسانه</li>

              {/* آیتم سایر */}
              <li
                className="flex gap-1 items-center cursor-pointer relative"
                onMouseEnter={() => setOther(true)}
                onMouseLeave={() => setOther(false)}
              >
                <p>سایر</p>
                <Image
                  src="/images/icons/down-arrow.svg"
                  width={20}
                  height={8}
                  alt="پایین"
                />

                {/* منوی بازشونده */}
                <div
                  onMouseEnter={() => setOther(true)}
                  onMouseLeave={() => setOther(false)}
                  className={`absolute top-8 right-0 bg-tertiaryColor w-96 h-52 rounded-md shadow-lg z-50 transition-all duration-300 ${
                    other
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <ul className="p-4 space-y-2 text-sm">
                    <li className="cursor-pointer hover:text-primaryColor">
                      هنر و معماری
                    </li>
                    <li className="cursor-pointer hover:text-primaryColor">
                      علوم پایه
                    </li>
                    <li className="cursor-pointer hover:text-primaryColor">
                      فناوری
                    </li>
                    <li className="cursor-pointer hover:text-primaryColor">
                      پزشکی
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div>
              <div className="relative">
                <Image
                  src="/images/icons/basket.svg"
                  width={28}
                  height={28}
                  alt="ورود"
                />
                <div className="absolute text-xs bottom-4 right-5 text-white bg-primaryColor rounded-full h-4 w-4 flex justify-center items-center">
                  <span className="mt-1">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-black fixed top-0 left-0 opacity-30 h-screen w-full z-30 transition-all ${
          other ? "visible opacity-30" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
}

export default Header;
