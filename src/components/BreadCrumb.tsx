"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BreadCrumb() {
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  const pathnameHandler = () => {
    if (pathname == "/courses") {
      return "همه ی دوره ها";
    }
  };
  return (
    <div>
      <ul className="flex items-center text-[14px]">
        <li className=" text-textColor font-normal">
          <Link href="/">خانه</Link>
        </li>
        {splitedPathname.length == 2 && (
          <li className=" text-primaryColor font-medium mr-2.5">
            <div className="flex  items-center gap-[9px]">
              <Image src="/images/icons/breadcrumb.svg" width={4.5} height={9} alt="بعدی"/>
              <Link href={splitedPathname[0]}>{pathnameHandler()}</Link>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default BreadCrumb;
