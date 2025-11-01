"use client";
import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import React, { useState } from "react";

function Contact() {
  const [mobileFocused, setMobileFocused] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [instaFocused, setInstaFocused] = useState(false);
  const [instaValue, setInstaValue] = useState("");
  const [telegramFocused, setTelgramFocused] = useState(false);
  const [telegramValue, setTelgramValue] = useState("");
  const [baleeitaFocused, setBaleeitaFocused] = useState(false);
  const [baleeitaValue, setBaleeitaValue] = useState("");
  const [xFocused, setXFocused] = useState(false);
  const [xValue, setXValue] = useState("");
  const [linkedinFocused, setLinkedinFocused] = useState(false);
  const [linkedinValue, setLinkedinValue] = useState("");
  const [websiteFocused, setWebsiteFocused] = useState(false);
  const [websiteValue, setWebsiteValue] = useState("");
  return (
    <div className="col-span-9">
      <DashboardBreadCrumb />
      <form className="bg-white rounded-md dashboardBoxShadow pt-[30px] px-11 pb-11">
        <div id="contactInfo">
          <div className="flex gap-2  items-center">
            <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
            <p className="text-xl font-bold">مشخصات ارتباطی</p>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-y-[30px] gap-x-[50px] mt-[15px]">
              <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setMobileFocused(true)}
                  onBlur={() => setMobileFocused(false)}
                  onChange={(e) => setMobileValue(e.target.value)}
                  value={mobileValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="mobile"
                  id="mobile"
                />
                <label
                  htmlFor="mobile"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    mobileFocused || mobileValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  شماره همراه
                </label>
              </div>
              <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  onChange={(e) => setEmailValue(e.target.value)}
                  value={emailValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    emailFocused || emailValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  ایمیل
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id="socialMedia ">
          <div className="mt-11 flex gap-2  items-center">
            <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
            <p className="text-xl font-bold ">صفحات مجازی</p>
          </div>
          <div className="grid grid-cols-12 gap-y-[30px] gap-x-[50px] mt-[15px]">
             <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setInstaFocused(true)}
                  onBlur={() => setInstaFocused(false)}
                  onChange={(e) => setInstaValue(e.target.value)}
                  value={instaValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="insta"
                  id="insta"
                />
                <label
                  htmlFor="insta"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    instaFocused || instaValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  اینستاگرام
                </label>
              </div>
               <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setTelgramFocused(true)}
                  onBlur={() => setTelgramFocused(false)}
                  onChange={(e) => setTelgramValue(e.target.value)}
                  value={telegramValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="telegram"
                  id="telegram"
                />
                <label
                  htmlFor="telegram"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    telegramFocused || telegramValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                   تلگرام
                </label>
              </div>
               <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setBaleeitaFocused(true)}
                  onBlur={() => setBaleeitaFocused(false)}
                  onChange={(e) => setBaleeitaValue(e.target.value)}
                  value={baleeitaValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="baleeita"
                  id="baleeita"
                />
                <label
                  htmlFor="baleeita"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    baleeitaFocused || baleeitaValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                   بله یا ایتا
                </label>
              </div>
               <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setXFocused(true)}
                  onBlur={() => setXFocused(false)}
                  onChange={(e) => setXValue(e.target.value)}
                  value={xValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="x"
                  id="x"
                />
                <label
                  htmlFor="x"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    xFocused || xValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                   ایکس
                </label>
              </div>
               <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setLinkedinFocused(true)}
                  onBlur={() => setLinkedinFocused(false)}
                  onChange={(e) => setLinkedinValue(e.target.value)}
                  value={linkedinValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                />
                <label
                  htmlFor="linkedin"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    linkedinFocused || linkedinValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                   لینکدین
                </label>
              </div>
               <div className="relative pt-3  col-span-6">
                <input
                  onFocus={() => setWebsiteFocused(true)}
                  onBlur={() => setWebsiteFocused(false)}
                  onChange={(e) => setWebsiteValue(e.target.value)}
                  value={websiteValue}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="website"
                  id="website"
                />
                <label
                  htmlFor="website"
                  className={` cursor-text absolute right-[15px] text-[#667085]  bg-white px-1 transition-all duration-200 ${
                    websiteFocused || websiteValue
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                   وب سایت یا وبلاگ شخصی
                </label>
              </div>
          </div>
        </div>
                <div className="w-full flex justify-end mt-20 gap-[15px]">
          <button className="cursor-pointer border border-strokeColor rounded-sm font-semibold h-12 w-40 flex justify-center items-center">انصراف</button>
          <button type="submit" className="cursor-pointer rounded-sm font-semibold bg-primaryColor text-white h-12 w-40 flex justify-center items-center">ثبت اطلاعات</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
