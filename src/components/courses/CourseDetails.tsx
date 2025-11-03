"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Course } from "@/type";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import { courseTypeDetector } from "@/tools/functions";

type CourseCartProps = { course: Course };

function CourseDetails({ course }: CourseCartProps) {
  const [mapHover, setMapHover] = useState<boolean>(false);
  const [category, setCatgory] = useState<string>("description");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const copyHandler = () => {
    navigator.clipboard.writeText(course.link);
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-8 ">
        <div className="col-span-5">
          <div className="mb-5 flex items-center text-white rounded-sm border px-[11px] py-[9px] w-fit">
            <Image
              className="ml-2"
              src="/images/icons/tag.svg"
              width={18}
              height={18}
              alt="برچسب"
            />
            <p className="text-sm font-medium ml-[5px]">دسته‌بندی:</p>
            {course.categories.map((item, index) => (
              <span key={item} className="text-xs font-normal ml-1">
                {item}
                {index < course.categories.length - 1 && "، "}
              </span>
            ))}
          </div>
          {/* عنوان */}
          <div className="mb-14">
            <h1 className="text-white text-2xl font-semibold leading-10 w-10/12">
              {course.title}
            </h1>
          </div>
          {/* پایان عنوان */}
          {/* تاریخ مدت زمان لایک */}
          <div className=" flex justify-between text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 items-center">
                <Image
                  className="mb-1"
                  src="/images/icons/calendar.svg"
                  width={18}
                  height={20}
                  alt="تقویم"
                />
                <div className="flex gap-0.5">
                  <p>تاریخ شروع:</p>
                  <p>{course.date.day}</p>
                  <p>{course.date.month}</p>
                  <p>{course.date.year}</p>
                  <p>-</p>
                  <p>ساعت {course.date.houre}</p>
                </div>
              </div>
              <div className="w-[1px] h-[22px] bg-white"></div>
              <div className="flex gap-1">
                <Image
                  src="/images/icons/clock.svg"
                  width={20}
                  height={20}
                  alt="تقویم"
                />

                <p>{course.time}</p>
                <p>ساعت</p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <div className="w-[1px] h-[22px] bg-white"></div>

              <Image
                className="mb-1"
                src="/images/icons/no-save.svg"
                width={24}
                height={24}
                alt="تقویم"
              />
            </div>
          </div>
          {/* پایان تاریخ مدت زمان لایک */}
          {/* قسمت کارت برگزار کننده */}
          <div className="mt-14 w-full pt-6 bg-white px-6 border border-strokeColor rounded-md">
            <div className="w-full">
              <div className="flex gap-6">
                <div>
                  <div className="w-[90px] h-[90px] bg-boxGrey border rounded-full"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2.5 text-textColor">
                    <p className="text-[18px] font-semibold">
                      {course.Organizer.name}
                    </p>
                  </div>
                  <div>
                    <p className=" leading-7">{course.Organizer.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-[20px] flex justify-between items-center">
              <Rating
                name="user-rating-display"
                value={course.Organizer.rate}
                precision={0.5}
                readOnly
                sx={{
                  direction: "ltr",
                  "& .MuiRating-icon": { margin: 0 },
                  "& .MuiRating-icon + .MuiRating-icon": {
                    marginLeft: "2px",
                    marginRight: 0,
                  },
                }}
              />
              <div className="w-[160px] h-10 flex items-center text-white rounded-sm bg-primaryColor justify-around">
                <p>دنبال کردن</p>
                <Image
                  src="/images/icons/follow.svg"
                  width={16.67}
                  height={16.67}
                  alt="دنبال کردن"
                />
              </div>
            </div>
          </div>
          {/* پایان قسمت کارت برگزار کننده */}
          {/* قسمت لینک رویداد با شرط آنلاین بودن */}
          {(course.holdingMethod.includes("آنلاین") ||
            course.holdingMethod.includes("آنلاین و حضوری")) && (
            <div className="flex w-full mt-5 rounded-sm border border-strokeColor">
              <div className="w-1/2 flex gap-2 pr-6 border-l rounded-r-[15px] border-strokeColor py-3 bg-white">
                <p className="text-textColor text-sm font-semibold mt-1">
                  وضعیت رویداد:
                </p>
                <p className="text-primaryColor text-sm font-semibold mt-1">
                  {courseTypeDetector(course.status)}
                </p>
              </div>
              <div
                onClick={() => copyHandler()}
                className="cursor-pointer bg-tertiaryColor pl-[25px] rounded-l-sm flex justify-end border-r-sm  gap-2 w-[60%] items-center"
              >
                <p className="text-sm font-semibold mt-2">{course.link}</p>

                <Image
                  src="/images/icons/link.svg"
                  width={20}
                  height={20}
                  alt="لینک"
                />
              </div>
            </div>
          )}
          <div className="w-full mt-6 pb-5 bg-white border border-strokeColor pt-5 px-[20px]  rounded-[15px]">
            <div className="flex items-center">
              <div className="flex items-center pr-2.5 gap-[5px] ml-[15px]">
                <div className="w-2.5 h-[5px] bg-primaryColor rounded-[5px]"></div>
                <h3 className="text-sm font-semibold pl-[15px] border-l border-strokeColor">
                  شیوه برگزاری
                </h3>
              </div>
              {course.holdingMethod.map((item, index) => (
                <p
                  key={index}
                  className="px-5 py-1 border text-xs border-strokeColor rounded-lg ml-2.5"
                >
                  {item}
                </p>
              ))}
            </div>
            {(course.holdingMethod.includes("حضوری") ||
              course.holdingMethod.includes("آنلاین و حضوری")) && (
              <>
                <div className="w-full h-[1px] bg-strokeColor my-2.5"></div>
                <div className="px-1">
                  <p className="text-sm font-semibold pb-1.5">آدرس رویداد</p>
                  <p className="text-sm leading-6 mb-2.5 text-textColor font-medium">
                    {course.address}
                  </p>
                  <div className=" relative">
                    <div
                      className={` ${
                        mapHover ? " blur-xs" : ""
                      } relative w-full h-[130px] overflow-hidden rounded-md border border-gray-300`}
                    >
                      <iframe
                        onMouseEnter={() => setMapHover(true)}
                        onMouseLeave={() => setMapHover(false)}
                        title="نقشه محل برگزاری"
                        src={course.location}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className=" absolute top-2/5 left-[40%]">
                      <Link href={course.location}>
                        <div
                          onMouseEnter={() => setMapHover(true)}
                          className={`flex  py-1.5 px-3.5 gap-2 justify-center bg-tertiaryColor border border-primaryColor rounded-sm ${
                            mapHover ? "opacity-100" : "opacity-0"
                          } transition-opacity duration-300 cursor-pointer`}
                        >
                          <p className="text-sm font-semibold text-primaryColor">
                            مسیر یابی
                          </p>
                          <Image
                            src="/images/icons/direction.svg"
                            width={12}
                            height={12}
                            alt="مسیر یابی"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div>
              {course.holdingMethod.includes("آنلاین") &&
                !course.holdingMethod.includes("آنلاین و حضوری") && (
                  <>
                    <div className="w-full h-[1px] bg-strokeColor my-[15px]"></div>

                    <div className="flex px-1 mt-[15px] items-center gap-2.5">
                      <Link
                        href={course.link}
                        className=" rounded-sm bg-tertiaryColor px-1.5 py-[7px]"
                      >
                        <Image
                          src="/images/icons/skyroom.svg"
                          width={29}
                          height={27}
                          alt="لینک"
                        />
                      </Link>
                      این رویداد در بستر اسکای روم برگزار می گردد
                    </div>
                  </>
                )}
                {course.holdingMethod.includes("آنلاین و حضوری") &&(
<>
                    <div className="w-full h-[1px] bg-strokeColor my-[15px]"></div>

                    <div className="flex px-1 mt-[15px] items-center gap-2.5">
                      <Link
                        href={course.link}
                        className=" rounded-sm bg-tertiaryColor px-1.5 py-[7px]"
                      >
                        <Image
                          src="/images/icons/skyroom.svg"
                          width={29}
                          height={27}
                          alt="لینک"
                        />
                      </Link>
                      این رویداد در بستر اسکای رو هم برگزار می گردد.
                    </div>
                  </>
                )
                }
            </div>
          </div>
          {/* سرفصل ها */}
          <div className="w-full border border-strokeColor rounded-[15px] pt-5 pb-6 mt-6 bg-white">
            <div className="flex items-center pr-2.5 gap-[5px]">
              <div className="w-2.5 h-[5px] bg-primaryColor rounded-[5px]"></div>
              <h3 className="text-sm font-semibold">سرفصل های رویداد</h3>
            </div>
            <div className="mt-2 px-[25px] text-textColor ">
              {/* کارت سر فصل */}
              <div className="w-full border items-center mb-2.5 rounded-sm border-strokeColor bg-[#fafafa] flex justify-between">
                <div className="flex items-center">
                  <div>
                    <p className="py-3 text-xs font-semibold px-[15px] border-l border-strokeColor">
                      بخش اول
                    </p>
                  </div>
                  <p className="pr-[15px] text-xs py-3">معرفی و مقدمه</p>
                </div>
                <div>
                  <p className="text-xs pl-[15px] py-3">12 دقیقه</p>
                </div>
              </div>
              {/* کارت سر فصل */}

              <div className="w-full border items-center mb-2.5 rounded-sm border-strokeColor bg-[#fafafa] flex justify-between">
                <div className="flex items-center">
                  <div>
                    <p className="py-3 text-xs font-semibold px-[15px] border-l border-strokeColor">
                      بخش اول
                    </p>
                  </div>
                  <p className="pr-[15px] text-xs py-3">معرفی و مقدمه</p>
                </div>
                <div>
                  <p className="text-xs pl-[15px] py-3">12 دقیقه</p>
                </div>
              </div>
            </div>
          </div>
          {/* آخر سرفصل ها */}
          {/* مخاطبین دوره */}
          <div className="w-full border border-strokeColor rounded-[15px] pt-5 pb-6 mt-6 bg-white text-textColor">
            <div className="flex items-center pr-2.5 gap-[5px]">
              <div className="w-2.5 h-[5px] bg-primaryColor rounded-[5px]"></div>
              <h3 className="text-sm font-semibold">مخاطبین دوره</h3>
            </div>
            <div className="mt-3 px-[25px]">
              <div className="text-xs">
                <p className=" font-semibold mb-2">
                  مدرسین زبان مالایی مستقل (Freelance Teachers)
                </p>
                <ul className=" list-disc pr-[25px]">
                  <li className="mb-1">
                    کسانی که به صورت خصوصی یا آنلاین کلاس برگزار می‌کنن
                  </li>
                  <li className="mb-1">
                    دغدغه‌ی اصلی‌شون پیدا کردن زبان‌آموز و پر کردن ظرفیت
                    کلاس‌هاست
                  </li>
                </ul>
              </div>
              <div className="text-xs mt-2">
                <p className=" font-semibold mb-2">مدرسین آموزشگاهی</p>
                <ul className=" list-disc pr-[25px]">
                  <li className="mb-1">
                    مدرسینی که در موسسات کار می‌کنن روش‌های بازاریابی شخصی یاد
                    بگیرن
                  </li>
                  <li className="mb-1">
                    دنبال جذب زبان‌آموزان وفادار برای برند شخصی خودشون
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* آخر مخاطبین دوره */}
          {/* پیش نیاز های دوره */}
          <div className="w-full border border-strokeColor rounded-[15px] pt-5 pb-6 mt-6 bg-white">
            <div className="flex items-center pr-2.5 gap-[5px] mb-4">
              <div className="w-2.5 h-[5px] bg-primaryColor rounded-[5px]"></div>
              <h3 className="text-sm font-semibold">
                پیش‌نیاز‌های تکمیلی رویداد
              </h3>
            </div>
            <ul className="px-5 gap-2 flex flex-wrap text-xs">
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                رزومه
              </li>
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                سوابق پژوهشی
              </li>
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                سوابق تشکیلاتی
              </li>
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                سوابق کاری
              </li>
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                {" "}
                سوابق تحصیی دانشگاهی
              </li>
              <li className="px-5 py-1 border border-strokeColor rounded-lg">
                سوابق تحصیلی حوزوی
              </li>
            </ul>
          </div>
          {/* آخر پیش نیاز های دوره */}
          {/* برچسب رویداد ها */}
          <div className="w-full border border-strokeColor rounded-[15px] pt-5 pb-6 mt-6 bg-white">
            <div className="flex items-center pr-2.5 gap-[5px]">
              <div className="w-2.5 h-[5px] bg-primaryColor rounded-[5px]"></div>
              <h3 className="text-sm font-semibold">برچسب های رویداد</h3>
            </div>
            <div>
              <ul className="px-5 gap-2 flex flex-wrap text-xs mt-3">
                <li className="px-5 py-1 border border-strokeColor rounded-lg">
                  زبان
                </li>
                <li className="px-5 py-1 border border-strokeColor rounded-lg">
                  دوره آنلاین
                </li>
                <li className="px-5 py-1 border border-strokeColor rounded-lg">
                  مدرس زبان
                </li>
              </ul>
            </div>
          </div>
          {/* آخر برچسب رویداد ها */}
        </div>
        <div className="col-span-7">
          <div>
            <Image
              src={course.image!}
              width={740}
              height={593}
              alt={course.title}
            />
          </div>
          {/* قسمت بلیت و اعمال کد */}
          <div className="rounded-[15px] w-full mt-5 bg-white border border-strokeColor py-5 px-6">
            <div className="w-full flex justify-between">
              <div className="font-semibold text-2xl relative mb-12">
                <div className="bg-[#BBDEFB] w-[170px] h-[10px] rounded-sm absolute top-5"></div>
                <h3 className="mr-1 gap-1 z-50 absolute w-44">
                  بلیت های رویداد
                </h3>
              </div>
            </div>
            {/* قسمت بلیط */}
            <div className=" mt-5">
              {/* بلیت */}
              <div className="w-full border border-[#BBDEFB] rounded-sm mb-4">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="text-sm font-semibold pr-[18px] pl-2.5  my-3 border-l border-strokeColor">
                      اعضای انجمن ژئوفیزیک
                    </p>
                    <p className="text-sm font-medium text-primaryColor  mt-3.5 pr-2.5">
                      فعال از 8 تا 18 مهر
                    </p>
                  </div>
                  <div className="flex h-12">
                    <div className="bg-[url(/images/pics/ticket-back.png)] border-b border-[#BBDEFB] w-[90px] bg-cover flex justify-center items-center cursor-pointer">
                      <p className="text-white text-sm font-semibold">
                        خرید بلیت
                      </p>
                    </div>
                    <div className="bg-primaryColor border-b border-[#BBDEFB] pl-[35px]  rounded-l-sm flex justify-between  items-center">
                      <Image
                        className=""
                        src="/images/icons/dashed.svg"
                        width={1}
                        height={48}
                        alt="خط چین"
                      />
                      <p className="text-sm pr-[29px] font-semibold text-white">
                        800000 تومان
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* بلیت */}
              <div className="w-full border border-[#BBDEFB] rounded-sm mb-4">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="text-sm font-semibold pr-[18px] pl-2.5  my-3 border-l border-strokeColor">
                      اعضای انجمن ژئوفیزیک
                    </p>
                    <p className="text-sm font-medium text-primaryColor  mt-3.5 pr-2.5">
                      فعال از 8 تا 18 مهر
                    </p>
                  </div>
                  <div className="flex h-12">
                    <div className="bg-[url(/images/pics/ticket-back.png)] border-b border-[#BBDEFB] w-[90px] bg-cover flex justify-center items-center cursor-pointer">
                      <p className="text-white text-sm font-semibold">
                        خرید بلیت
                      </p>
                    </div>
                    <div className="bg-primaryColor border-b border-[#BBDEFB] pl-[35px]  rounded-l-sm flex justify-between  items-center">
                      <Image
                        className=""
                        src="/images/icons/dashed.svg"
                        width={1}
                        height={48}
                        alt="خط چین"
                      />
                      <p className="text-sm pr-[29px] font-semibold text-white">
                        800000 تومان
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* بلیت */}
            </div>
          </div>
          {/* پایین قسمت بلیت و کد تخفیف */}
          {/* توضیحات و سرفصل و سوالات متداول */}
          <div className="mt-8">
            <div className="flex gap-2.5 mb-7">
              <div
                onClick={() => setCatgory("description")}
                className=" cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`${
                    category == "description"
                      ? "bg-primaryColor text-white"
                      : "text-textColor border border-strokeColor bg-white"
                  } transition-all duration-400 font-medium text-sm flex justify-center items-center h-9   rounded-sm w-[115px]`}
                >
                  <div>توضیح</div>
                </div>
                <div
                  className={`${
                    category == "description" ? "" : "hidden"
                  } transition-all duration-400 bg-[#BBDEFB] w-[95px] h-[5px] rounded-b-sm`}
                ></div>
              </div>
              <div
                onClick={() => setCatgory("meating")}
                className=" cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`${
                    category == "meating"
                      ? "bg-primaryColor  text-white"
                      : "text-textColor border border-strokeColor bg-white"
                  } transition-all duration-400 font-medium text-sm flex justify-center items-center h-9   rounded-sm w-[115px]`}
                >
                  <div>جلسات</div>
                </div>
                <div
                  className={`${
                    category == "meating" ? "" : "hidden"
                  } transition-all duration-400 bg-[#BBDEFB] w-[95px] h-[5px] rounded-b-sm`}
                ></div>
              </div>
              <div
                onClick={() => setCatgory("frequentlyQuestions")}
                className=" cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`${
                    category == "frequentlyQuestions"
                      ? "bg-primaryColor text-white"
                      : "text-textColor border border-strokeColor bg-white"
                  } transition-all duration-400 font-medium text-sm flex justify-center items-center h-9   rounded-sm w-[115px]`}
                >
                  <div>توضیح</div>
                </div>
                <div
                  className={`${
                    category == "frequentlyQuestions" ? "" : "hidden"
                  } transition-all duration-400 bg-[#BBDEFB] w-[95px] h-[5px] rounded-b-sm`}
                ></div>
              </div>
            </div>
            <div className="w-full bg-white border border-strokeColor rounded-[15px] p-6">
              {category == "description" && (
                <div
                  className={`overflow-hidden ${
                    isExpanded ? "h-auto" : "h-44"
                  } transition-all duration-300`}
                  style={{
                    maskImage: !isExpanded
                      ? "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                      : "none",
                    WebkitMaskImage: !isExpanded
                      ? "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                      : "none",
                  }}
                >
                  <div className="text-textColor">
                    <div className="font-semibold text-2xl relative ">
                      <div className="bg-tertiaryColor w-[108px] h-[10px] rounded-sm absolute top-5"></div>
                      <h3 className="mr-1 flex gap-1 z-50 absolute ">
                        توضیحات
                      </h3>
                    </div>
                  </div>
                  <div className="mt-12 text-sm">
                    <h4 className="font-semibold mb-2">
                      {course.descriptions.first.title}
                    </h4>
                    <p className=" leading-6">
                      {course.descriptions.first.text}
                    </p>
                  </div>
                  <div>
                    <h4 className="mt-3 mb-2 text-sm font-semibold">
                      {course.descriptions.seccond.title}
                    </h4>
                    {course.descriptions.seccond.items?.map((item, index) => (
                      <p className="text-sm my-1" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <div className="w-full text-center">
                <button onClick={toggleText} className="text-textColor mt-2">
                  {isExpanded ? (
                    <div className="flex items-center gap-11 border border-strokeColor rounded-sm px-4 py-2 cursor-pointer">
                      <p>کمتر بخوان</p>
                      <div className=" rotate-180">
                        <Image
                          src="/images/icons/arrow-down.svg"
                          width={15}
                          height={15}
                          alt="مطلب کتر"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-11 border border-strokeColor rounded-sm px-4 py-2 cursor-pointer">
                      <p>ادامه مطلب</p>
                      <div>
                        <Image
                          src="/images/icons/arrow-down.svg"
                          width={15}
                          height={15}
                          alt="مطلب کتر"
                        />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* آخر توضیحات و سرفصل و سوالات متداول */}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
