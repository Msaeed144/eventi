import React from "react";
import Image from "next/image";

function ExamsBanner() {
  return (
    <div className="examBanner mt-12 py-16 px-24">
      <div className=" flex justify-between">
        <div className="w-2/3">
          <div className="flex gap-2">
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
          <div className="flex gap-2 border border-white w-40 text-white rounded-sm py-2 justify-center mt-10">
              <p>مشاهده آزمون ها</p>
              <Image
                src="/images/icons/white-diagonal.svg"
                width={20}
                height={20}
                alt="ورود"
              />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ExamsBanner;
