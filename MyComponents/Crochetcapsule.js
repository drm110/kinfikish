import React, { useContext, useState, useRef } from "react";

const crochetcapsule1 = "../assets/new/crochetcapsule1.png";
const crochetcapsule2 = "../assets/new/crochetcapsule2.png";

const newcro1 = "../assets/new/newcro1.jpg";
const newcro2 = "../assets/new/newcro2.jpg";
const newcro3 = "../assets/new/newcro3.jpg";

const Crochetcapsule = () => {
  return (
    <div className="mt-10 w-full py-16 overflow-hidden">
      <div>
        <p className="uppercase text-3xl font-bold text-center pb-16">
          THE CROCHET CAPSULE
        </p>
      </div>
      <div className="flex flex-col gap-2 align-middle w-full h-full">
        <img
          src={newcro1}
          alt="newcro1"
          className="relative lg:w-[80%] w-full h-full"
        />
        <div className="flex gap-2 lg:flex-row md:flex-col sm:flex-col flex-col w-full h-full">
          <img
            src={newcro2}
            alt="newcro2"
            className="lg:w-[50%] w-full h-full"
          />
          <img
            src={newcro3}
            alt="newcro3"
            className="lg:w-[50%] w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Crochetcapsule;
