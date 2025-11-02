"use client";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";
import { courses } from "@/data";
import CourseCart from "./courses/CourseCart";
import BreadCrumb from "./BreadCrumb";
import Image from "next/image";

function CoursesPagination() {
  const [page, setPage] = useState<number>(1);
  const [ type , setType ] = useState<string>("mostVisited")
  const itemsPerPage = 9;
  const totalItems = courses.length;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // تابع تبدیل عدد انگلیسی به فارسی
  const toPersianNumber = (n: number | string) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return n
      .toString()
      .split("")
      .map((c) => (/\d/.test(c) ? persianDigits[parseInt(c)] : c))
      .join("");
  };

  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  // آیتم‌های صفحه فعلی
  const currentItems = courses.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <div className=" w-full flex flex-col items-center mx-auto relative mb-[100px]">
        <div className="w-[863px] bg-tertiaryColor h-9 rounded-t-md flex items-center pr-[33px] z-10">
          <div className="">
            <BreadCrumb />
          </div>
        </div>
        <div className=" absolute top-[35px] bg-white rounded-[15px] border-[0.1px] border-strokeColor h-[70px] w-full pr-[25px] pl-[33px] flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-medium ml-5">
              <span>مرتب سازی بر اساس:</span>
            </div>
            <div className="flex gap-2.5">
              <div onClick={()=>setType("newest")} className={`w-[100px] h-9 flex items-center justify-center rounded-sm border border-boxGrey cursor-pointer ${type == "newest" ? "bg-primaryColor border-0 text-white" :"border border-boxGrey text-textColor"}`}>
                <span>جدیدترین</span>
              </div>
              <div onClick={()=>setType("mostVisited")} className={`w-[100px] h-9 flex items-center justify-center rounded-sm border border-boxGrey cursor-pointer ${type == "mostVisited" ? "bg-primaryColor border-0 text-white" :"border border-boxGrey text-textColor"}`}>
                <span>پربازدیدترین</span>
              </div>
              <div onClick={()=>setType("free")} className={`w-[100px] h-9 flex items-center justify-center rounded-sm border border-boxGrey cursor-pointer ${type == "free" ? "bg-primaryColor border-0 text-white" :"border border-boxGrey text-textColor"}`}>
                <span>رایگان</span>
              </div>
            </div>
          </div>
          <div>
            <div className=" pl-[1px] w-[38px] h-10 rounded-sm border border-boxGrey flex items-center justify-center cursor-pointer">
              <Image src="/images/icons/sort.svg" width={19.08} height={20} alt="مرتب سازی" />
            </div>
          </div>
        </div>
      </div>
      <div className="paginationCourse">
        <div className="grid grid-cols-3 gap-7">
          {currentItems.map((course) => (
            <CourseCart course={course} key={course.id} />
          ))}
        </div>

        <div className="paginationNumber mt-5">
          <Stack spacing={2}>
            <Pagination
              siblingCount={0}
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  // شماره صفحات فارسی
                  page={item.page ? toPersianNumber(item.page) : undefined}
                  // فونت دلخواه برای شماره‌ها
                  sx={{
                    fontFamily: "Dana, Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default CoursesPagination;
