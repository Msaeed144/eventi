import React from "react";
import Image from "next/image";
function Accesses() {
  return (
    <div className="mt-16 mb-6 py-4 bg-white pt-7">
      <div className=" container mx-auto">
        <div className="bg-[#f3f1f1] text-center py-2 rounded-[90px] font-semibold w-[150px]">
          <p>دسترسی سریع</p>
        </div>
        <div className="my-6 pb-8 border-b-2 border-boxGrey">
          <ul className="flex list-disc gap-9">
            <li>ایجاد رویداد</li>
            <li>آزمون ها</li>
            <li>رزومه</li>
            <li>برگزار کننده ها</li>
            <li>ارتباط با ما</li>
          </ul>
        </div>
        <div className="my-6 pb-8 border-b-2 border-boxGrey">
          <ul className="flex flex-wrap list-disc gap-9 pl-36 text-textColor">
            <li>توسعه فردی و خانواده</li>
            <li>آموزشی</li>
            <li>تشکیلاتی</li>
            <li>رسانه ای</li>
            <li>تبیین</li>
            <li>جهادی</li>
            <li>کسب و کار</li>
            <li>تکنولوژی</li>
            <li>فنی مهندسی و صنعت</li>
            <li>مدریت</li>
            <li>مالی و اقتصاد</li>
            <li>کارآفرینی</li>
            <li>تحصیلی</li>
            <li>گردشگری</li>
            <li>علوم انسانی</li>
            <li>پزشکی</li>
            <li>سرگرمی</li>
            <li>علوم پایه</li>
            <li>خیریه</li>
            <li>مذهبی و مناسبتی</li>
            <li>فرهنگی هنری</li>
            <li>سایر</li>
            <li></li>
          </ul>
        </div>
        <div className="flex gap-10 justify-between">
          <div>
            <div>
              <Image
                src="/images/logo.svg"
                width={119}
                height={44}
                alt="لوگو"
              />
              <p className="mt-2 font-semibold text-sm">
                ارتباط با پشتیبانی: ۰۲۱۸۸۳۹۰۵۱۵
              </p>
            </div>
          </div>
          <div className="w-3/5">
            <p className="text-[#767676] leading-9 text-sm">
              ایونتی اولین و بزرگترین بستر تخصصی مدیریت، فروش و برگزاری وبینار
              (سمینار و کلاس) و رویداد آنلاینه که در اون هم می‌تونید وبینار
              برگزار کنین و هم وبینار شرکت کنین! بسته‌های تبلیغاتی و
              اطلاع‌رسانی، بسته‌های مکمل برگزاری و سیستم فروش فیلم وبینار رو در
              اختیارتون قرار میده. با ایسمینار همچنین می‌تونین ثبت‌نامی و فروش
              وبینارتون رو به طرز قابل ‌توجهی بهبود بدین.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-[79px] h-20 bg-[#f2f9ff] rounded-sm flex justify-center items-center">
              <Image
                src="/images/pics/enamad.png"
                width={70}
                height={70}
                alt="ای نماد"
              />
            </div>
            <div className="w-[79px] h-20 bg-[#f2f9ff] rounded-sm flex justify-center items-center">
              <Image
                src="/images/pics/samandehi.png"
                width={70}
                height={70}
                alt="ای نماد"
              />
            </div>{" "}
            <div className="w-[79px] h-20 bg-[#f2f9ff] rounded-sm flex justify-center items-center">
              <Image
                src="/images/pics/ettehadiyeh.png"
                width={70}
                height={70}
                alt="ای نماد"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accesses;
