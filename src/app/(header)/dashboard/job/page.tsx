"use client";

import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import JobSection from "@/components/dashboard/JobSection";
import TashkilatSection from "@/components/dashboard/TashkilatSection";

const Page: React.FC = () => {

  return (
    <div className="col-span-9 relative">
      <DashboardBreadCrumb />
      <div className="bg-white rounded-md dashboardBoxShadow pt-[30px] px-11 pb-11">
        <JobSection />
        <div  className="mt-10">
        <TashkilatSection />

        </div>
      </div>

    </div>
  );
};

export default Page;
