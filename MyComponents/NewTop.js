import React, { useContext, useState, useRef } from "react";
import Link from "next/link";

const top1 = "../assets/new2/new_3_dress.jpg";
const top2 = "../assets/new2/dress_model_1.jpg";
const top3 = "../assets/new2/dress_model_2.jpg";

const NewTop = () => {
  return (
    <div className="mt-16">
      <div>
        <p className="uppercase text-3xl font-bold text-center">NEW</p>
      </div>
      <div className="mt-8">
        <div className="flex flex-col gap-8 items-center h-full">
          <Link href="/Shop">
            <div className="relative w-full h-full">
              <div className="absolute lg:p-8 p-4 uppercase lg:text-xl md:text-lg sm:text-base text-xs font-bold">
                <p>SUMMER ‘24 DRESS COLLECTION</p>
                <p>OUT NOW</p>
              </div>
              <img src={top1} alt="top1" className="w-full h-full" />
            </div>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-16 w-full">
            <img src={top2} alt="top2" className="w-full col-span-1" />
            <img src={top3} alt="top3" className="w-full col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTop;
