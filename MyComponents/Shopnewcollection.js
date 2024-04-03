import React, { useContext, useState, useRef } from "react";

const snc1 = "../assets/new/snc1.jpg";
const snc2 = "../assets/new/snc2.jpg";

const Shopnewcollection = () => {
  return (
    <div className="mt-10 w-full py-16 overflow-hidden">
      <div>
        <p className="uppercase text-3xl font-bold text-center pb-16">
          SHOP NEW COLLECTION
        </p>
      </div>
      <div className="flex gap-2 lg:flex-row md:flex-col sm:flex-col flex-col w-full h-full">
        <img src={snc1} alt="snc1" className="lg:w-[50%] w-full h-full" />
        <img src={snc2} alt="snc2" className="lg:w-[50%] w-full h-full" />
      </div>
    </div>
  );
};

export default Shopnewcollection;
