'use client'
import Books from "@/components/dashboard/Books";
import Conference from "@/components/dashboard/Conference";
import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import Education from "@/components/dashboard/Education";
import Inventions from "@/components/dashboard/Inventions";
import Olympiad from "@/components/dashboard/Olympiad";
import  Article  from "@/components/dashboard/Article";
import React, { useState } from "react";

function Page() {
  const [ tab , setTab ] = useState("education")
  return (
    <div className="col-span-9 relative">
      <DashboardBreadCrumb />
      <div className="bg-white w-full rounded-md dashboardBoxShadow border border-strokeColor">
        <div className="bg-primaryColor rounded-t-md pt-2 px-11">
          <ul className=" flex">
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "education" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("education")}>
              <li className={` font-medium px-[18px] transition-all duration-300 ${tab == "article" ?"border-transparent":" border-white"} border-l `}>
                سوابق تحصیلی
              </li>
            </div>
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "article" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("article")}>
              <li className={` font-medium px-[18px] transition-all duration-300 border-l ${tab == "conference" ?"border-transparent":" border-white"}`}>
                مقالات علمی
              </li>
            </div>
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "conference" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("conference")}>
              <li className={` font-medium px-[18px] transition-all duration-300 border-l ${tab == "books" ?"border-transparent":" border-white"}`}>
                همایش های علمی
              </li>
            </div>
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "books" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("books")} >
              <li className={` font-medium px-[18px] transition-all duration-300 border-l ${tab == "olympiad" ?"border-transparent":" border-white"}`}>کتاب ها</li>
            </div>
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "olympiad" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("olympiad")}>
              <li className={` font-medium px-[18px] transition-all duration-300 border-l ${tab == "inventions" ?"border-transparent":" border-white"}`}>
                المپیاد های علمی
              </li>
            </div>
            <div className={`py-[14px] transition-all duration-300 cursor-pointer ${tab == "inventions" ? "bg-white rounded-t-[15px] text-textColor":"text-white"}`} onClick={()=>setTab("inventions")}>
              <li className={`transition-all duration-300 ${tab=="inventions"?"text-black" :"text-white "}font-medium px-[18px]`}>
                اختراعات / بنیاد نخبگان
              </li>
            </div>
          </ul>
        </div>
        <div className="py-[30px] px-[45px]">
            {
              tab=="education" ? <Education /> :
              tab=="article" ? <Article /> :
              tab=="conference" ? <Conference /> :
              tab=="books" ? <Books /> :
              tab=="olympiad" ? <Olympiad /> :
              tab=="inventions" && <Inventions />
            }
        </div>
      </div>
    </div>
  );
}

export default Page;
