"use client";
import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import React, { useState } from "react";
import Image from "next/image";

function Personal() {
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [melliCodeFocused, setMelliCodeFocused] = useState(false);
  const [melliCodeValue, setMelliCodeValue] = useState("");
  const [marriedFocused, setMarriedFocused] = useState(false);
  const [marriedValue, setMarriedValue] = useState("");
  const [genderFocused, setGenderFocused] = useState(false);
  const [genderValue, setGenderValue] = useState("");
  const [ostanFocused, setOstanFocused] = useState(false);
  const [ostanValue, setOstanValue] = useState("");
  const [shahrFocused, setShahrFocused] = useState(false);
  const [shahrValue, setShahrValue] = useState("");
  const [vazifeFocused , setVazifeFocused] = useState(false)
  const [vazifeValue , setVazifeValue] = useState("")
  const [activityFocused , setActivityFocused] = useState(false)
  const [activityValue , setActivityValue] = useState("")
  const [religinFocused , setReligionFocused] = useState(false)
  const [religinValue , setReligionValue] = useState("")
  const [mazhabFocused , setMazhabFocused] = useState(false)
  const [mazhabValue , setMazhabValue] = useState("")
  

  return (
    <div className="col-span-9">
      <DashboardBreadCrumb />
      <form className="bg-white rounded-md dashboardBoxShadow pt-[30px] px-11 pb-11">
        <div id="profilePic" className="flex justify-between">
          <div>
            <div className="flex gap-2  items-center">
              <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
              <p className="text-xl font-bold">عکس پروفایل</p>
            </div>
            <div className="mt-2.5">
              <p className="font-medium mb-[5px]">
                لطفا جهت ارسال تصویر به موارد زیر توجه فرمایید:
              </p>
              <p className="text-sm mb-1">فرمت تصویر حتما باید jpg باشد.</p>
              <p className="text-sm">
                حجم فایل بارگزاری شده نباید از دو مگابایت بیشتر باشد.
              </p>
            </div>
          </div>
          <div>
            <input type="file" name="" id="file" className="hidden" />
            <label
              htmlFor="file"
              className=" cursor-pointer w-[120px] h-[120px] bg-boxGrey flex justify-center items-center rounded-full "
            >
              <Image
                src="/images/icons/upload-pic.svg"
                width={50}
                height={50}
                alt="عکس را انتخاب کنید"
              />
            </label>
          </div>
        </div>

        <div id="personlaData ">
          <div className="flex gap-2  items-center mt-11">
            <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
            <p className="text-xl font-bold">مشخصات فردی</p>
          </div>

          <div className="grid grid-cols-12 gap-y-[30px] gap-x-[50px] mt-[15px]">
            {/* First name */}
            <div className="relative pt-3  col-span-6">
              <input
                onFocus={() => setFirstNameFocused(true)}
                onBlur={() => setFirstNameFocused(false)}
                onChange={(e) => setFirstNameValue(e.target.value)}
                value={firstNameValue}
                className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                type="text"
                name="firstName"
                id="firstName"
              />
              <label
                htmlFor="firstName"
                className={` cursor-text absolute right-2 text-[#667085]  font-normal bg-white px-1 transition-all duration-200 ${
                  firstNameFocused || firstNameValue
                    ? "translate-y-[-10px] text-[11px] text-primaryColor"
                    : "translate-y-3 text-[14px]"
                }`}
              >
                نام
              </label>
            </div>
            {/* Last name */}
            <div className="relative pt-3  col-span-6">
              <input
                onFocus={() => setLastNameFocused(true)}
                onBlur={() => setLastNameFocused(false)}
                onChange={(e) => setLastNameValue(e.target.value)}
                value={lastNameValue}
                className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                type="text"
                name="lastName"
                id="lastName"
              />
              <label
                htmlFor="lastName"
                className={` cursor-text absolute right-2 text-[#667085]  font-normal bg-white px-1 transition-all duration-200 ${
                  lastNameFocused || lastNameValue
                    ? "translate-y-[-10px] text-[11px] text-primaryColor"
                    : "translate-y-3 text-[14px]"
                }`}
              >
                نام خانوادگی
              </label>
            </div>
            {/* Married select */}
            <div className="relative col-span-6">
              <select
                onChange={(e) => setMarriedValue(e.target.value)}
                value={marriedValue}
                onFocus={() => setMarriedFocused(true)}
                onBlur={() => setMarriedFocused(false)}
                id="married"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="married"
              >
                <option value=""></option>
                <option value="married">متاهل</option>
                <option value="single">مجرد</option>
              </select>

              <label
                htmlFor="married"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  marriedFocused || marriedValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${marriedFocused && " text-primaryColor"}`}
              >
                وضعیت تاهل
              </label>
            </div>
            <div className="relative col-span-6">
              <select
                onChange={(e) => setGenderValue(e.target.value)}
                value={genderValue}
                onFocus={() => setGenderFocused(true)}
                onBlur={() => setGenderFocused(false)}
                id="gender"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="gender"
              >
                <option value=""></option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>

              <label
                htmlFor="gender"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  genderFocused || genderValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${genderFocused && " text-primaryColor"}`}
              >
                جنسیت
              </label>
            </div>
            <div className=" col-span-6">
              <div className="w-full  relative h-12 border border-strokeColor rounded-[8px]">
                <label className=" absolute -top-2 bg-white px-1.5 right-3 text-sm">
                  تاریخ تولد
                </label>
                <div className="text-[#667085] flex justify-between items-center mt-3 px-7">
                  <select className="pl-2" name="" id="">
                    <option value="">روز</option>
                  </select>
                  <div className="w-[1px] h-6 bg-strokeColor"></div>
                  <select className="pl-2" name="" id="">
                    <option value="">ماه</option>
                  </select>
                  <div className="w-[1px] h-6 bg-strokeColor"></div>
                  <select className="pl-2" name="" id="">
                    <option value="">سال</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="relative  col-span-6">
              <input
                onFocus={() => setMelliCodeFocused(true)}
                onBlur={() => setMelliCodeFocused(false)}
                onChange={(e) => setMelliCodeValue(e.target.value)}
                value={melliCodeValue}
                className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4  rounded-[8px] h-12 border border-strokeColor"
                type="text"
                name="melliCode"
                id="melliCode"
              />
              <label
                htmlFor="melliCode"
                className={` cursor-text absolute right-2 text-[#667085]  font-normal bg-white px-1 transition-all duration-200 ${
                  melliCodeFocused || melliCodeValue
                    ? "translate-y-[-10px] text-[11px] text-primaryColor"
                    : "translate-y-3 text-[14px]"
                }`}
              >
                کد ملی
              </label>
            </div>
            <div className="relative col-span-6">
              <select
                onChange={(e) => setOstanValue(e.target.value)}
                value={ostanValue}
                onFocus={() => setOstanFocused(true)}
                onBlur={() => setOstanFocused(false)}
                id="ostan"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="ostan"
              >
                <option value=""></option>
              </select>

              <label
                htmlFor="ostan"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  ostanFocused || ostanValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${ostanFocused && " text-primaryColor"}`}
              >
                استان
              </label>
            </div>
            <div className="relative col-span-6">
              <select
                onChange={(e) => setShahrValue(e.target.value)}
                value={shahrValue}
                onFocus={() => setShahrFocused(true)}
                onBlur={() => setShahrFocused(false)}
                id="shahr"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="shahr"
              >
                <option value=""></option>
              </select>

              <label
                htmlFor="shahr"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  shahrFocused || shahrValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${shahrFocused && " text-primaryColor"}`}
              >
                شهرستان
              </label>
            </div>
          </div>
        </div>
        <div id="otherData">
          <div className="flex gap-2  items-center mt-11">
            <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
            <p className="text-xl font-bold">مشخصات تکمیلی</p>
          </div>
          <div className="grid grid-cols-12 gap-y-[30px] gap-x-[50px] mt-[15px]">
            {genderValue == "male" && (
              <div className="relative col-span-6">
                <select
                  onChange={(e) => setActivityValue(e.target.value)}
                  value={vazifeValue}
                  onFocus={() => setVazifeFocused(true)}
                  onBlur={() => setVazifeFocused(false)}
                  id="vazife"
                  className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                  name="vazife"
                >
                  <option value=""></option>
                </select>

                <label
                  htmlFor="vazife"
                  className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                    vazifeFocused || vazifeValue
                      ? "translate-y-[-55px] text-[11px]"
                      : "-translate-y-8 text-[14px]"
                  } ${vazifeFocused && " text-primaryColor"}`}
                >
                  وضعیت نظام وظیفه
                </label>
              </div>
            )}

            <div className="relative col-span-6">
              <select
                onChange={(e) => setActivityValue(e.target.value)}
                value={activityValue}
                onFocus={() => setActivityFocused(true)}
                onBlur={() => setActivityFocused(false)}
                id="activity"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="activity"
              >
                <option value=""></option>
              </select>

              <label
                htmlFor="activity"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  activityFocused || activityValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${activityFocused && " text-primaryColor"}`}
              >
                حوزه فعالیت فعلی
              </label>
            </div>
            <div className="relative col-span-6">
              <select
                onChange={(e) => setReligionValue(e.target.value)}
                value={religinValue}
                onFocus={() => setReligionFocused(true)}
                onBlur={() => setReligionFocused(false)}
                id="religion"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="religion"
              >
                <option value=""></option>
              </select>

              <label
                htmlFor="religion"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  religinFocused || religinValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${religinFocused && " text-primaryColor"}`}
              >
                دین
              </label>
            </div>
            <div className="relative col-span-6">
              <select
                onChange={(e) => setMazhabValue(e.target.value)}
                value={mazhabValue}
                onFocus={() => setMazhabFocused(true)}
                onBlur={() => setMazhabFocused(false)}
                id="mazhab"
                className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 py-3 border-strokeColor rounded-[8px]"
                name="mazhab"
              >
                <option value=""></option>
              </select>

              <label
                htmlFor="mazhab"
                className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                  mazhabFocused || mazhabValue
                    ? "translate-y-[-55px] text-[11px]"
                    : "-translate-y-8 text-[14px]"
                } ${mazhabFocused && " text-primaryColor"}`}
              >
                مذهب
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end gap-[15px]">
          <button className="cursor-pointer border border-strokeColor rounded-sm font-semibold h-12 w-40 flex justify-center items-center">انصراف</button>
          <button type="submit" className="cursor-pointer rounded-sm font-semibold bg-primaryColor text-white h-12 w-40 flex justify-center items-center">ثبت اطلاعات</button>
        </div>
      </form>
    </div>
  );
}

export default Personal;
