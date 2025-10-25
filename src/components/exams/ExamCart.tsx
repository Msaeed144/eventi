import { ExamItem } from "@/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type ExamCartProps = { exam: ExamItem };

function ExamCart({ exam }: ExamCartProps) {
  return (
    <div className=" col-span-4">
      <div className=" w-full text-center flex flex-col items-center relative">
        <div className="bg-boxGrey w-[360px] h-[170px] rounded-md absolute"></div>
        <div className="w-full  bg-white rounded-md py-5 mt-[45px] ">
          <div className="px-5">
            <div className=" leading-6  mt-[120px] text-right  text-[14px] flex justify-between">
              <div className="flex gap-1 items-center">
              <div className="w-2.5 h-[5px] rounded-[5px] bg-primaryColor"></div>
              <p className="font-bold text-textColor">
              {exam.faName}
              </p>
              </div>
              <div className="flex gap-1">
                <Image src="/images/icons/question.svg" width={15} height={15} alt="علامت سوال" />
                <p className="text-primaryColor font-semibold">{exam.question} سوال</p>
              </div>
            </div>
            <div className="text-right text-sm leading-6 mt-2.5 mb-[22px]">
              <p className="text-textColor">
                {exam.miniDescription}
              </p>
            </div>

          </div>
        <div className="h-[1px] w-full bg-boxGrey mb-5 opacity-45"></div>
        <div className="px-4">
          <div className="flex justify-between">
            <Link href={`/exams/${exam.enName}`} className="flex justify-around w-[125px] h-9 items-center border border-primaryColor rounded-sm">
              <p className="text-xs font-semibold text-primaryColor ">صفحه ی آزمون</p>
              <Image src="/images/icons/blue-diagonal.svg" width={15} height={15} alt="علامت سوال" />
            </Link>
            <div>
              <p className="text-lg font-semibold text-primaryColor">
                {exam.price}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ExamCart;
