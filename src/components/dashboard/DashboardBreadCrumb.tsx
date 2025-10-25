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
    }
  };
  return (
    <div>
      <div className="w-full bg-white rounded-md p-6 px-9 mb-6">
        <div className="flex gap-2.5 items-center">
          <div className="mb-1">
            <Image
              src="/images/icons/resume.svg"
              width={20}
              height={25}
              alt="رزومه"
            />
          </div>
          <ul className="flex items-center text-[14px]">
            <li className="font-medium text-xl">
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
                  <Link className="text-xl font-medium" href={splitedPathname[0]}>{pathnameHandler()}</Link>
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
