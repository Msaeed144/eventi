import React from "react";
import Image from "next/image";
import LastCourseSlider from "./LastCourseSlider";
function LastCourses() {
  return (
    <div className="container mx-auto mb-12">
      <div className="mt-24 ">
        <div className="flex justify-between">
          <div className="font-semibold text-2xl relative mb-12">
            <div className="bg-tertiaryColor w-36 h-[10px] rounded-sm absolute top-5"></div>
            <h3 className="mr-1 flex gap-1 z-50 absolute w-40 text-primaryColor">
              آخرین <div className=" text-black">دوره ها</div>
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            <p className=" font-medium mt-1">مشاهده همه</p>
            <Image
              src="/images/icons/diagonal.svg"
              width={20}
              height={20}
              alt="ورود"
            />
          </div>
        </div>
        <div>
        <div className="w-full relative">
            <div className="w-[96%] h-96 mx-auto">
              <LastCourseSlider />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LastCourses;
