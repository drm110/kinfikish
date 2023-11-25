import React from "react";

const Followtiktok = () => {
  return (
    <div className="py-12">
      <div>
        <p className="uppercase text-3xl font-bold text-center">TikTok</p>
        <a href="https://www.tiktok.com/@kinki.fish">
          {" "}
          <p className="lowercase text-2xl text-gray-500 underline text-center">
            @ <b className="font-semibold">kinki.fish</b>
          </p>
        </a>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container pt-7 pb-24 mx-auto">
          <div className="flex justify-center flex-wrap">
            <div className="p-4 xxl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 w-full">
              <div className="">
                <div className="bg-tiktokimage1 md:bg-contain bg-cover px-8 pt-16 pb-24 overflow-hidden relative h-[25rem] md:h-[31.45rem] flex flex-col justify-end">
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                </div>
              </div>
            </div>
            <div className="p-4 xxl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 w-full">
              <div className="">
                <div className="bg-tiktokimage2 md:bg-contain bg-cover px-8 pt-16 pb-24 overflow-hidden relative h-[25rem] md:h-[31.45rem] flex flex-col justify-end">
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                </div>
              </div>
            </div>
            <div className="p-4 xxl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 w-full">
              <div className="">
                <div className="bg-tiktokimage3 md:bg-contain bg-cover px-8 pt-16 pb-24 overflow-hidden relative h-[25rem] md:h-[31.45rem] flex flex-col justify-end">
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Followtiktok;
