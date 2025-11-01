"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

function DashboardBreadCrumb() {
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  const pathnameHandler = () => {
    if (pathname == "/dashboard/personal") {
      return "اطلاعات فردی";
    }else if (pathname == "/dashboard/contact") {
      return "اطلاعات تماس";
    } else if (pathname == "/dashboard/specialized") {
      return "حوزه های تخصصی"
    } else if (pathname == "/dashboard/job"){
      return "سوابق شغلی و تشکیلاتی"
    } else if (pathname == "/dashboard/education"){
      return "اطلاعات سوابق علمی"
    } else if (pathname =="/dashboard/resume"){
      return "آپلود رزومه"
    }
  };
  return (
    <div>
      <div className="w-full bg-white rounded-md p-6 px-9 mb-6">
        <div className="flex gap-2.5 items-center">
          <div className="mb-1">
            <Image
              src="/images/icons/resume.svg"
              width={30}
              height={30}
              alt="رزومه"
            />
          </div>
          <ul className="flex items-center text-[14px]">
            <li className="font-medium text-lg">
              <Link href="/dashboard">تکمیل رزومه</Link>
            </li>
            {splitedPathname.length == 3 && (
              <li
                className={`${pathname == "/courses" && "text-primaryColor"} ${
                  pathname == "/exams" && "text-white font-medium"
                }  font-medium mr-2.5`}
              >
                <div className="flex  items-center gap-[9px]">
                  <Image src="/images/icons/left-breadcrumb.svg" width={6} height={12} alt="بعدی" />
                  <Link className="text-lg font-medium" href={splitedPathname[0]}>{pathnameHandler()}</Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardBreadCrumb;
