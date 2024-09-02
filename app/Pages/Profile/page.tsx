import PrimNavbar from "@/app/components/primNavbar";
import React from "react";

function page() {
  return (
    <div>
      <PrimNavbar />
      <div className="grid grid-cols-[250px,1fr] h-screen ">
        <div className=" col-start-1 h-full bg-gray-200">
          <div className="  border-[1px] border-black h-14 mt-4 font-semibold flex items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white">
            User Profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
