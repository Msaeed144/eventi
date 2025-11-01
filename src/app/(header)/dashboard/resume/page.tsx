import DashboardBreadCrumb from '@/components/dashboard/DashboardBreadCrumb'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
        <div className="col-span-9">
           <DashboardBreadCrumb />
      <form className="bg-white rounded-md dashboardBoxShadow pt-[30px] px-11 pb-11">
                      <div className="rounded-md border border-dashed border-boxGrey">
                        <input type="file" name="file" id="file" className="hidden "  />
                        <label htmlFor="file" className=" cursor-pointer w-full bg-[#fafafa] block flex-col text-center justify-center items-center rounded-md ">
                          <div className="flex justify-center pt-7">
                            <Image src="/images/icons/upload-file.svg" width={60} height={60} alt="فایل را انتخاب کنید" />
                          </div>
        
                          <p className="mt-4 text-sm font-semibold">برای بارگذاری عکس یا فایل کلیک کنید</p>
                          <div className="flex gap-2 justify-center mt-3 pb-7">
                            <p className="text-xs">حداکثر حجم قابل قبول:</p>
                            <p className="text-xs font-semibold">40 مگابایت</p>
                          </div>
        
                        </label>
                      </div>
      </form>
        </div>
  )
}

export default page