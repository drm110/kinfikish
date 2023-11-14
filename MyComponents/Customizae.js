import Image from "next/image";
import React from "react";
// import videoCustom from '../public/assets/passone1.mp4';
import mainBg from "../public/assets/images/1536.png";

const Customizae = () => {
  return (
    <div className="mt-11 overflow-hidden">
      <div className="bg-cover bg-center bg-fixed w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[30rem] h-[30rem] relative overflow-hidden bg-black pb-1">
        {/* <div className='bg-black w-full h-full opacity-30 bg-bgVideoPlayImg bg-no-repeat'>
            </div> */}
        {/* autoPlay muted loop */}
        <video
          autoPlay
          muted
          loop
          className="mx-auto md:w-1/2 w-full object-fill h-full"
          src="../assets/passone1.mp4"
          playsInline
        ></video>
      </div>
      <div className=" w-[100%] h-[52rem]">
        <Image
          src={mainBg}
          width={500}
          height={500}
          alt="Image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Customizae;
