import React from "react";
import Image from "next/image";
import { organizers } from "@/data";
import OrganaizerCart from "./OrganaizerCart";
function Organizers() {
    const fiveOrganizer = organizers.slice(4)
  return (
    <div className="bg-[#eeeae7]">
      <div className="container mx-auto h-[300px] mb-12">
        <div className="flex justify-between items-center">
          <div className="pt-24">
            <div className="font-semibold text-2xl relative mb-12">
              <div className="bg-tertiaryColor w-36 h-[10px] rounded-sm absolute top-5"></div>
              <h3 className="mr-1 flex gap-1 z-50 absolute w-40">
                برگزار کننده ها
              </h3>
            </div>
            <div>
              <div className="flex items-center gap-1.5 border rounded-sm py-1 px-2">
                <p className=" font-medium mt-1">مشاهده همه</p>
                <Image
                  src="/images/icons/diagonal.svg"
                  width={20}
                  height={20}
                  alt="ورود"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            {fiveOrganizer.map(organizer =>(
                <OrganaizerCart key={organizer.id} organaizer={organizer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organizers;
