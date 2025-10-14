import React from "react";
import Image from "next/image";
type Props = {
  children: React.ReactNode;
};

export default function SimpleLayout({ children }: Props) {
  return (
    <div dir="rtl" className="flex justify-center items-center h-screen">
      <div className="w-[795px] h-[450px] relative">
        <div className="w-full h-full bg-white border border-[#E2E2E2] py-[25px] pr-10 pl-[25px] rounded-md absolute z-10">
          <div className="flex justify-between">
            <div>
            <div className="mb-[34px]">
              <Image src="/images/logo.svg" width={99} height={36} alt="logo" />
            </div>
            <div>
            {children}
            </div>
            </div>
            <div className="w-[340px] h-[400px] registerPicBox rounded-md relative">
              <Image width={340} height={400} alt="register" src="/images/pics/register-background.png" />
              <div className=" absolute top-16 right-12">
                <Image src="/images/pics/fingerprint.png" width={244} height={244} alt="احراز هویت" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-tertiaryColor border border-[#e2e2e2] rounded-md absolute top-[15px] left-[15px] z-0"></div>
      </div>
    </div>
  );
}
