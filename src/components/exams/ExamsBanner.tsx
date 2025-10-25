"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../BreadCrumb";
import { usePathname } from "next/navigation";

function ExamsBanner() {
  const pathname = usePathname();
  return (
    <div
      className={`examBanner ${
        pathname == "/" ? "py-16" : "py-8"
      }  my-12  relative`}
    >
      <div className=" absolute top-0 left-0">
        <div>
          <Image
            src="/images/pics/banner-background.png"
            width={550}
            height={275}
            alt="بنر"
          />
        </div>
      </div>
      <div className=" relative container mx-auto flex justify-between">
        <div className=" absolute -top-6 left-0">
          <Image
            src="/images/pics/exam-pic.svg"
            width={260}
            height={205}
            alt="بنر"
          />
        </div>
        <div className="w-2/3">
          <div>
            <BreadCrumb />
          </div>
          <div className={`flex gap-2 ${pathname != "/" && "mt-7"}`}>
            <div>
              <Image
                src="/images/icons/exam-icon.svg"
                width={20}
                height={30}
                alt="آزمون"
              />
            </div>
            <h3 className="text-white text-2xl font-bold">آزمون ها</h3>
          </div>
          <div>
            <p className="text-white leading-7 mt-6">
              آزمون شخصیت‌شناسی ابزاری است که ویژگی‌ها و رفتارهای فردی را بررسی
              کرده و به درک بهتر خود و دیگران کمک می‌کند. این آزمون می‌تواند در
              بهبود روابط شخصی و حرفه‌ای و همچنین رشد فردی مؤثر باشد.
            </p>
          </div>
          {pathname == "/" && (
            <Link
              href="/exams"
              className="flex gap-2 border border-white w-40 text-white rounded-sm py-2 justify-center mt-5"
            >
              <p>مشاهده آزمون ها</p>
              <Image
                src="/images/icons/white-diagonal.svg"
                width={20}
                height={20}
                alt="ورود"
              />
            </Link>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ExamsBanner;
