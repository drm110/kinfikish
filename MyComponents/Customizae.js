import Image from "next/image";
import React from "react";
import mainBg from "../public/assets/images/1536.png";

const Customizae = () => {
  return (
    <div className="mt-11 overflow-hidden">
      <div className=" w-[100%]">
        <Image
          src={mainBg}
          width={500}
          height={500}
          alt="Image"
          className="w-full h-full"
        />
      </div>
      <div className="bg-cover bg-center bg-fixed w-full 2xl:h-[50rem] xl:h-[45rem] lg:h-[40rem] max-h-screen relative overflow-hidden pb-1">
        {/* <div className='bg-black w-full h-full opacity-30 bg-bgVideoPlayImg bg-no-repeat'>
            </div> */}
        {/* autoPlay muted loop */}
        <video
          autoPlay
          muted
          loop
          className="mx-auto w-full object-fill lg:h-full"
          src="https://www.dropbox.com/scl/fi/p0ygudq1e2urnyi80u5x8/swing-video-final.mp4?rlkey=qhc0kl30tz39hm8na6v2gt5rt&raw=1"
        ></video>
      </div>
    </div>
  );
};

export default Customizae;
