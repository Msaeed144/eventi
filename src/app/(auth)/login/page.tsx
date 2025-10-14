import React from "react";

function Login() {
  return (
    <form>
      <p className="text-2xl font-semibold text-textColor mb-[22px] ">
        لطفا اطلاعات زیر را وارد کنید
      </p>
      <div className="flex justify-between gap-2">
        <div>
          <div className=" relative pt-3 mb-[25px]">
            <input
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[171px] rounded-[8px] h-[48px] border border-strokeColor"
              type="text"
              name=""
              id=""
            />
            <div className=" absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
              نام{" "}
            </div>
          </div>
        </div>
        <div>
          <div className=" relative pt-3 mb-[25px]">
            <input
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[171px] rounded-[8px] h-12 border border-strokeColor"
              type="text"
              name=""
              id=""
            />
            <div className=" absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
              نام خانوادگی
            </div>
          </div>
        </div>
      </div>
      <div className="  flex justify-between gap-2">
        <div className="relative">
          <select
            className="customSelect p-4 border border-strokeColor w-[171px] h-12"
            name=""
            id=""
          >
            <option value=""></option>
          </select>
          <div className=" absolute -top-1.5 right-3 text-[14px] font-normal bg-white px-1">
            استان
          </div>
        </div>
        <div className="relative">
          <select
            className="customSelect p-4 border border-strokeColor w-[171px] h-12"
            name=""
            id=""
          >
            <option value=""></option>
          </select>
          <div className=" absolute -top-1.5 right-3 text-[14px] font-normal bg-white px-1">
            شهرستان
          </div>
        </div>
      </div>
       <div className=" relative pt-3 mt-[10px] mb-[22px]">
            <input
              className="focus:border-2 focus:border-[#e1e2e2] outline-none noSpinner p-4 w-[350px] rounded-[8px] h-12 border border-strokeColor"
              type="text"
              name=""
              id=""
            />
            <div className=" absolute top-0.5 right-3 text-[14px] font-normal bg-white px-1">
              نام خانوادگی
            </div>
          </div>
           <button
          type="submit"
          className=" cursor-pointer mb-2 w-full h-[48px] bg-primaryColor rounded-[8px] text-white text-base font-medium">
            ثبت نام و ورود
        </button>
    </form>
  );
}

export default Login;
