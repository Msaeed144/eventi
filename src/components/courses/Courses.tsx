'use client'
import React, { useEffect, useState } from "react";
import CourseCategory from "./CourseCategory";

function Courses() {
  const [ type , setType ] = useState("course")
  useEffect(()=>{
    console.log(type)
  },[type])
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="font-semibold text-2xl relative z-50">
            <h3 className="mr-1 flex gap-1 z-50">
            دسته بندی ها
          </h3>
          <div className=" bg-tertiaryColor h-[10px] w-36 rounded-sm absolute bottom-1 -z-10"></div> 
        </div>
        <div className="flex gap-2 ml-36">
          <div onClick={()=>setType("course")} className={` py-1 w-[100px] text-center border rounded-sm border-boxGrey cursor-pointer ${type=="course" ? "bg-primaryColor text-white" : "bg-white text-black"} hover:bg-primaryColor hover:text-white transition-all duration-300`}>دوره</div>
          <div onClick={()=>setType("workshop")} className={` py-1 w-[100px] text-center border rounded-sm border-boxGrey cursor-pointer ${type=="workshop" ? "bg-primaryColor text-white" : "bg-white text-black"}  hover:bg-primaryColor hover:text-white transition-all duration-300`}>کارگاه</div>
          <div onClick={()=>setType("seminar")} className={` py-1 w-[100px] text-center border rounded-sm border-boxGrey cursor-pointer  ${type=="seminar" ? "bg-primaryColor text-white" : "bg-white text-black"}  hover:bg-primaryColor hover:text-white transition-all duration-300`}>سمینار</div>
          <div onClick={()=>setType("call")} className={` py-1 w-[100px] text-center border rounded-sm border-boxGrey cursor-pointer ${type=="call" ? "bg-primaryColor text-white" : "bg-white text-black"}  hover:bg-primaryColor hover:text-white transition-all duration-300`}>فراخوان</div>
          <div onClick={()=>setType("offline")} className={` py-1 w-[100px] text-center border rounded-sm border-boxGrey cursor-pointer ${type=="offline" ? "bg-primaryColor text-white" : "bg-white text-black"}  hover:bg-primaryColor hover:text-white transition-all duration-300`}>آفلاین</div>
        </div>
        <div></div>
      </div>
        <div className="w-full relative">
            <div className="w-[96%] h-96 mx-auto mt-6">
                <CourseCategory type={type} />
            </div>
        </div>
    </div>
  );
}

export default Courses;