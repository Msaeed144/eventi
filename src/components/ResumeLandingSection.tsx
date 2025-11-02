import React from "react";
import Image from "next/image";
function ResumeLandingSection() {
  return (
    <div className="container mx-auto text-white resumeBanner mt-32 mb-12 rounded-t-md pr-16">
      <div className=" relative">
        <div className=" absolute top-0 left-0">
        <Image src="/images/pics/banner-background.png" width={400} height={280} alt="بنر" />
        </div>
        <div className=" absolute left-40 bottom-0">
                  <Image src="/images/pics/resume-pic.svg" width={144} height={242} alt="بنر" />

        </div>
        <h3 className=" text-2xl font-bold pt-12">رزومه</h3>
        <p className="my-3.5">
          شما می‌توانید با تکمیل رزومه خود در صورت نیاز در برخی دوره‌های خاص
          شرکت کنید
        </p>
        <div className="flex w-[140px] gap-1 py-1 justify-center border border-white rounded-sm">
          <p>تکمیل رزومه</p>
          <Image
            src="/images/icons/white-diagonal.svg"
            width={20}
            height={20}
            alt="ورود"
          />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default ResumeLandingSection;
