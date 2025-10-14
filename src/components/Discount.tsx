import React from 'react'

function Discount() {
  return (
     <div className=" flex">
                <div className="">
                  <input
                    className="focus:border-2 focus:border-[#98A2B3] outline-none w-[236px] rounded-r-sm pr-2 text-sm border border-strokeColor py-2.5"
                    type="text"
                    name=""
                    placeholder="کد تخفیف خود را وارد کنید"
                    id=""
                  />
                </div>
                <div className="">
                  <button className=" font-semibold text-textColor cursor-pointer px-5 rounded-l-sm bg-tertiaryColor py-2.5 text-sm border border-strokeColor">
                    اعمال کد
                  </button>
                </div>
              </div>
  )
}

export default Discount