import React, { useContext, useState, useRef } from "react";

const crochetcapsule1 = "../assets/new/crochetcapsule1.png";
const crochetcapsule2 = "../assets/new/crochetcapsule2.png";

const Crochetcapsule = () => {
  return (
    <div className="mt-10 w-full py-16 overflow-hidden">
      <div>
        <p className="uppercase text-3xl font-bold text-center pb-16">
          THE CROCHET CAPSULE
        </p>
      </div>
      <div className="flex gap-2 lg:flex-row md:flex-col sm:flex-col flex-col w-full h-full">
        <img
          src={crochetcapsule1}
          alt="crochetcapsule1"
          className="relative w-full h-full"
        />
        <img
          src={crochetcapsule2}
          alt="crochetcapsule2"
          className="relative w-full h-full"
        />
      </div>
    </div>
  );
};

export default Crochetcapsule;
