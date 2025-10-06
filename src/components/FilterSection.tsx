"use client";

import React, { useState } from "react";
import Image from "next/image";
import AccordionFilter from "./AccordionFilter";

function FilterSection() {
  const [ search , setSearch ] = useState(true)
  return (
    <div className="w-1/5">
      <div className=" relative">
        <input onBlur={() => setSearch(true)} onFocus={()=>setSearch(false)}  placeholder="جستجو ..." className="focus:border-2 focus:border-[#98A2B3] outline-none pr-4 w-full bg-white border  border-boxGrey rounded-sm h-12" type="text" />
        <div className={` absolute top-[15px] left-3 ${search ?" visible":" invisible"}`}>
          <Image
            src="/images/icons/search2.svg"
            width={20}
            height={20}
            alt="جستجو"
          />
        </div>
      </div>
      <AccordionFilter />
    </div>
  );
}

export default FilterSection;
