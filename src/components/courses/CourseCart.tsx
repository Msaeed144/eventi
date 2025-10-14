import React from "react";
import type { Course } from "@/type";
import { courseTypeDetector } from "@/tools/functions";
import Image from "next/image";
import Link from "next/link";

type CourseCartProps = { course: Course };

function CourseCart({ course }: CourseCartProps) {
  return (
    <div className="text-center flex flex-col items-center relative">
      <div className="bg-boxGrey w-3xs h-[170px] rounded-md absolute"></div>
      <div className="z-40 absolute top-[154px] w-full">
        <div className="flex justify-end w-full">
          {/* <div className="w-[95px] h-[28px] rounded-[5px] bg-primaryColor flex font-light items-center justify-center text-white">
            <p className="text-[12px]">{courseTypeDetector(course.status)}</p>
          </div> */}
          <div className="bg-white ml-8 p-1 rounded-[5px] boxShadow">
            <Image
              src="/images/icons/heart-border.svg"
              width={20}
              height={20}
              alt="لایک نشده"
            />
          </div>
        </div>
      </div>
      <div className="w-[291px]  bg-white rounded-md py-5 mt-[45px] ">
        <div className="px-4">
          <div className=" leading-6 text-black mt-32 text-right font-semibold text-[14px]">
            {course.title}
          </div>
          <div className="flex justify-between my-4 items-center">
            <div className="w-[44px] h-[44px] bg-boxGrey rounded-full"></div>
            <div>
              <p className=" text-[12px]">
                {course.date.day +
                  " " +
                  course.date.month +
                  " " +
                  course.date.year +
                  " - ساعت " +
                  course.date.houre}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1px] mt-2 w-full bg-boxGrey"></div>
        <div className="px-4 flex justify-between items-center mt-5">
          <Link href={`/courses/${course.id}`} className="w-[115px] h-9 border border-primaryColor rounded-sm flex justify-center items-center gap-2 font-semibold text-primaryColor">
            <p className="text-[12px]">اطلاعات دوره</p>
            <Image
              src="/images/icons/blue-diagonal.svg"
              width={18}
              height={18}
              alt="لینک"
            />
          </Link>
          <div>
            <p className="text-primaryColor font-semibold">
              {course.price}
              {course.price == "رایگان" && " !"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCart;
