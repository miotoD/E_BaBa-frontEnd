import React from "react";

function page() {
  return (
    <div className=" grid grid-cols-[100px, 200px, 100px, 200px ] grid-rows-4">
      <div className=" col-start-1 col-span-2 bg-red-400"> Item 1</div>
      <div className=" col-start-3 col-span-1 bg-indigo-400 row-start-1">
        Item 2
      </div>
      <div className=" col-start-1 col-span-1 bg-green-300 row-start-2">
        Item 3
      </div>

      <div className=" col-start-2 col-span-1 bg-blue-800 row-start-2">
        {" "}
        Item 4
      </div>

      <div className=" col-start-3 col-span-1 bg-slate-800">Item 5</div>

      <div className=" col-start-1 col-span-2 bg-pink-400 row-start-3">
        Item 6
      </div>

      <div className=" col-start-3 col-span-1 bg-orange-600 row-start-3">
        Item 7
      </div>
    </div>
  );
}

export default page;
