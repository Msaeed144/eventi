import { ExamItem } from "@/type";
import React from "react";
import Image from "next/image";
import FrequentlyQuestions from "./FrequentlyQuestions";
import ExamCommentSection from "./ExamCommentSection";
type ExamDetailsProps = { exam: ExamItem };

function ExamDetails({ exam }: ExamDetailsProps) {
  return (
    <div>
      <div className="bg-tertiaryColor pt-10 pb-[35px] pr-[50px] relative mb-[30px] rounded-md">
        <div className=" absolute top-0 left-0">
          <Image
            src="/images/pics/exam-details-bg.png"
            width={655}
            height={298}
            alt="بک گراند"
          />
        </div>
        <div className="w-2/5">
          <h1 className=" leading-9 text-primaryColor font-extrabold text-xl">
            {exam.miniDescription}
          </h1>
        </div>
        <div className="w-4/5 mt-5 mb-7">
          <p className="text-textColor font-medium  leading-[30px]">
            {exam.detailsDescription}
          </p>
        </div>
        <div className="flex gap-11">
            <div className="w-[160px] h-10 flex items-center justify-center rounded-sm cursor-pointer gap-8 bg-primaryColor text-white">
                <p>ورود به آزمون</p>
                <Image src="/images/icons/white-diagonal.svg" width={17} height={17} alt="ورود به آزمون" />
            </div>
            <div className="flex gap-2 items-center">
                <Image src="/images/icons/black-question.svg" width={18} height={18} alt="سوالات" />
                <p className="font-semibold">{exam.question} سوال</p>
            </div>
        </div>
      </div>
      <div className=" bg-white py-8 px-[50px] rounded-md">
        {exam.descriptions.map((description , index)=>(
            <div key={index}>
                <h3 className="font-semibold text-[20px] my-2">{description.title}</h3>
                <p className=" leading-[30px]">{description.text}</p>
            </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-7">
            <FrequentlyQuestions question={exam.frequentlyQuestions}/>
        </div>
        <div className="col-span-5">
            <ExamCommentSection comments={exam.comments}/>
        </div>
      </div>
    </div>
  );
}

export default ExamDetails;
