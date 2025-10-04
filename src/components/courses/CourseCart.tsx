import React from "react";
import type { Course } from "@/type";
import { courseTypeColor, courseTypeDetector } from "@/tools/functions";
import Image from "next/image";

type CourseCartProps = { course: Course };

function CourseCart({ course }: CourseCartProps) {
  return (
    <div>
      <div className="p-2 h-80 relative">
        <div className=" relative w-[290px] h-[350px] bg-white mt-2 z-10 text-white rounded-md">
          <div className=" absolute bottom-14 w-full ">
            <div className="bg-boxGrey opacity-50 h-[1px] w-full bottom-0"></div>
          </div>
        </div>
        <div className="top-0 absolute right-[27px] z-30">
          <div className=" relative w-[249px] h-[170px] p-4 mx-auto bg-boxGrey rounded-md">
            <div className=" absolute -bottom-3">
              <div className="flex items-center gap-20">
                <div>
                  <div
                    className="px-2 rounded-[5px] w-28 text-center"
                    style={{
                      backgroundColor: `${courseTypeColor(course.status)}`,
                    }}
                  >
                    <p className="text-white">
                      {courseTypeDetector(course.status)}
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white p-1 rounded-sm"
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  <Image
                    className="mt-1"
                    src="/images/icons/heart-border.svg"
                    width={24}
                    height={24}
                    alt="ورود"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-60 mt-6 font-semibold">
              <h4>{course.title}</h4>
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 my-4 bg-boxGrey rounded-full"></div>
                <div className="font-light">
                  {course.date.day}
                  {course.date.month}
                  {course.date.year} - ساعت
                  {course.date.houre}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-primaryColor font-semibold ">
            <div className="flex gap-1 w-32 px-2 py-1 justify-center border mt-2 rounded-sm  border-primaryColor cursor-pointer">
              <p>اطلاعات دوره</p>
                <Image
                  src="/images/icons/blue-diagonal.svg"
                  width={20}
                  height={20}
                  alt="ورود"
                />
            </div>
            <p className="mt-2">{course.price}{course.price =="رایگان" &&" !"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCart;
