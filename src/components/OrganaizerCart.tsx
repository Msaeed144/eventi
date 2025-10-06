import { Organaizer } from "@/type";
import React from "react";
import Rating from "@mui/material/Rating";

function OrganaizerCart({ organaizer }: { organaizer: Organaizer }) {
  return (
    <div className=" relative mt-12">
      <div className="w-[100px] h-[100px] -top-8 right-8  bg-boxGrey rounded-full absolute"></div>
      <div className="w-[170px] h-[200px] bg-white rounded-[15px] pt-20 text-center">
        {organaizer.name}
        <div className="mt-2 flex justify-center">
          <Rating
            name="user-rating-display"
            value={organaizer.rate}
            precision={0.5}
            readOnly
            sx={{
              direction: "ltr",
              "& .MuiRating-icon": { margin: 0 },
              "& .MuiRating-icon + .MuiRating-icon": {
                marginLeft: "2px",
                marginRight: 0,
              },
            }}
          />
        </div>
        <div className="mt-4 cursor-pointer">
        <span className=" border-[#979797] text-[#323232] rounded-sm border px-2 py-1">
            مشاهده پروفایل
        </span>
        </div>

      </div>
    </div>
  );
}

export default OrganaizerCart;
