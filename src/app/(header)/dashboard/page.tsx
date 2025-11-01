"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { resumeDashboard } from "@/data";
import Link from "next/link";

function Page() {
  const [progressValues, setProgressValues] = useState(
    resumeDashboard.map(() => 0)
  );

  useEffect(() => {
    const duration = 1000;
    const intervalTime = 20;

    // ایجاد یک تایمر برای هر آیتم
    const timers = resumeDashboard.map((item, index) => {
      const increment = item.progress / (duration / intervalTime);

      return setInterval(() => {
        setProgressValues((oldValues) => {
          const newValues = [...oldValues];
          newValues[index] = Math.min(
            newValues[index] + increment,
            item.progress
          );
          return newValues;
        });
      }, intervalTime);
    });
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);
  return (
        <div className="col-span-9">
          <DashboardBreadCrumb />
          <div className="grid grid-cols-12 gap-6">
            {resumeDashboard.map((item, index) => (
              <div
                key={item.type}
                className="dashboard col-span-4 bg-white rounded-sm dashboardBoxShadow px-5 pt-5 pb-[15px]"
              >
                <div className="flex justify-between">
                  <div className="flex gap-[5px] items-center">
                    <div className="h-[30px] w-1 bg-tertiaryColor rounded-sm"></div>
                    <p className="text-lg font-medium">
                      {item.type === "personal"
                        ? "اطلاعات فردی"
                        : item.type === "contact"
                        ? "اطلاعات تماس"
                        : item.type === "specialized"
                        ? "حوزه های تخصصی"
                        : item.type === "job"
                        ? "سوابق شغلی و تشکیلاتی"
                        : item.type === "education"
                        ? "اطلاعات سوابق علمی"
                        : "آپلود رزومه"}
                    </p>
                  </div>
                  <div className="p-2.5 bg-tertiaryColor rounded-sm">
                    <Image
                      src={
                        item.type === "personal"
                          ? "/images/icons/user.svg"
                          : item.type === "contact"
                          ? "/images/icons/call.svg"
                          : item.type === "specialized"
                          ? "/images/icons/book.svg"
                          : item.type === "job"
                          ? "/images/icons/job.svg"
                          : item.type === "education"
                          ? "/images/icons/rducation.svg"
                          : "/images/icons/upload-resume.svg"
                      }
                      width={28}
                      height={28}
                      alt="آیکون"
                    />
                  </div>
                </div>

                <Box sx={{ width: "100%", mt: 3, mb: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={progressValues[index]}
                  />
                </Box>
                <div>
                  {item.confirm === true ? (
                    <div className="mt-4 py-2 border bg-[#B0D18680] border-tertiaryColor rounded-sm flex justify-center items-center">
                      <p className="text-[#5E8A25]">تکمیل شده</p>
                    </div>
                  ) : (
                    <Link
                      href={
                        item.type === "personal"
                          ? "/dashboard/personal"
                          : item.type === "contact"
                          ? "/dashboard/contact"
                          : item.type === "specialized"
                          ? "/dashboard/specialized"
                          : item.type === "job"
                          ? "/dashboard/job"
                          : item.type === "education"
                          ? "/dashboard/education"
                          : "/dashboard/resume"
                      }
                      className=" mt-4 py-2 border border-tertiaryColor rounded-sm flex justify-center items-center">
                      <p>تکمیل اطلاعات</p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
  );
}

export default Page;
