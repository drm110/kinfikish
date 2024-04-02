"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewTshirts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="mt-16">
      <div>
        <p className="uppercase text-3xl font-bold text-center">NEW</p>
      </div>
      <div className="mt-16">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className="px-4">
            <img
              src="../assets/new/blackhoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/new/greenhoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/new/redhoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/new/slatehoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/new/stonehoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/new/taupehoodforsite.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          {/* <div className="px-4">
            {" "}
            <img
              src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            {" "}
            <img
              src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/ab59b429f6bf146244871c8bb1349397.png"
              alt="black chair and white table"
              className="relative w-full object-cover h-full"
            />
          </div>

          <div className="px-4">
            <img
              src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/ab59b429f6bf146244871c8bb1349397.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/1212ce490381edbb8c59b6db1235dd9d.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/cc5efc62cf17784e73aa31fb8f4b32cd.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/b18e74bf4a7655fef70d2dc5b4e92a12.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div>
          <div className="px-4">
            <img
              src="../assets/images/ab59b429f6bf146244871c8bb1349397.png"
              alt="black chair and white table"
              className="relative w-full object-cover"
            />
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default NewTshirts;
