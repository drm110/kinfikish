import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/assets/images/b02c1f10b5a65fb8c8cc58ae1c0a7231.png";
import discountImg from "../public/assets/images/b8f12cd57f6510b368200966f67b526f.png";
// import { LuSearch } from 'react-icons/lu'
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppContext } from "@/componentss/context";

const pageData = [
  { path: "/", name: "" },
  { path: "/Archive", name: "Archive" },
  { path: "/Checkout", name: "Checkout" },
  { path: "/Contact", name: "Contact" },
  { path: "/Exchangepolicy", name: "Exchange Policy" },
  { path: "/MyCart", name: "My Cart" },
  { path: "/PrivacyPolicy", name: "Privacy Policy" },
  { path: "/Shippingpolicy", name: "Shipping Policy" },
  { path: "/Shop", name: "Shop" },
  { path: "/product", name: "Product" },
  { path: "/Terms", name: "Terms" },
  { path: "/thank-you", name: "Thank you" },
];

const Header = ({ header }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  console.log(header, "header");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cart, setCart] = useContext(AppContext);
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    header?.header || header || "";
  // const{headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon} = headerFooter.header.header || {};
  // const{headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon} = headerFooter.header.headerFooter.header || {};
  console.warn("Header COMPONENT", header);

  useEffect(() => {
    const currentUrl = router.asPath;
    const curPath = "/" + currentUrl.split("/")[1];
    const curPage = pageData.find((item) => item.path === curPath);

    if (curPage) {
      switch (curPath) {
        case "/":
          setTitle("");
          setDescription("");
          break;
        case "/product":
          const cartData = JSON.parse(
            localStorage.getItem("forAddToCart") || "[]"
          );
          setTitle(`${cartData.name} | ${siteTitle || "KinkiFish"}`);
          const plainText = cartData.description.replace(/<[^>]+>/g, "").trim();
          setDescription(plainText);
          break;
        default:
          setTitle(`${curPage.name} | ${siteTitle || "KinkiFish"}`);
          setDescription("");
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
  }, [cart]);

  return (
    <>
      <Head>
        <title>{title || "KinkiFish | CONTEMPORARY MEETS COUTURE"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          property="og:title"
          content={title || "KinkiFish | CONTEMPORARY MEETS COUTURE"}
        />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://kinkifish.com/favicon.ico"
        />
        <meta name="url" property="og:url" content="https://kinkifish.com" />
        <meta
          name="description"
          property="og:description"
          content={description || "Eclectic. Inspired. Kinki. Shop now."}
        />
      </Head>
      <header>
        <nav className="bg-white relative w-full z-20 top-0 left-0 border-b border-gray-100 dark:border-gray-600">
          <Image
            src={discountImg}
            className="absolute top-7 hidden md:block"
            height={220}
            alt="discountIage"
          />
          <ul className="navigation max-w-[95vw] flex flex-col flex-wrap justify-between items-center relative mx-auto py-5">
            <div className="flex justify-end items-center w-full">
              <div className="flex justify-between items-center w-full 2xl:w-11/12 xl:w-10/12 lg:w-10/12 md:w-7/12 sm:w-full">
                <div className="mysearchbar 2xl:flex xl:flex lg:flex md:hidden hidden justify-center items-center text-sm border-b border-gray-400 font-light mr-36">
                  {/* <LuSearch className="mr-2"/> */}
                  {/* <input type="text" placeholder="Search for an item..." className="outline-none text-gray-700 bg-transparent"/> */}
                </div>
                <div className="logo mb-4" href="#">
                  {/* <h3 className="font-bold text-2xl">LOGO</h3> */}
                  <Link href="/">
                    <Image
                      src={logo}
                      className="max-h-[81px] 2xl:ml-28 xl:ml-0"
                      height={60}
                      alt={siteTitle || "Logo"}
                    />
                  </Link>
                </div>

                <span className="w-96 justify-between 2xl:flex xl:flex lg:flex sm:hidden hidden [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-bold [&>li>a]:text-sm uppercase text-gray-900 mt-2">
                  <li>
                    <Link href="/Shop">
                      <button
                        href="#"
                        className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase"
                      >
                        <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                        Shop
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Archive">
                      <button
                        href="#"
                        className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase"
                      >
                        <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                        Archive
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/MyCart">
                      <button
                        href="#"
                        className="font-bold overflow-hidden pb-2 uppercase relative pr-5"
                      >
                        {/* <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span> */}
                        Cart
                        <span className="absolute bg-black text-white top-0 right-0 rounded-full text-xs">
                          &nbsp; {cart?.totalQty || 0} &nbsp;
                        </span>
                        {/* <i className="fa fa-shopping-bag text-xl " aria-hidden="true"></i> */}
                      </button>
                    </Link>
                  </li>

                  <label htmlFor="check" className="close-menu">
                    X
                  </label>
                </span>

                {/* <span className="hidden sm:hidden w-96 justify-between md:hidden lg:flex xl:flex 2xl:flex border-2 border-green-800 [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-bold [&>li>a]:text-sm uppercase text-gray-900 mt-2"></span> */}
              </div>
            </div>

            <input type="checkbox" id="check" />
            <span className="menu xl:w-2/3 lg:w-2/5 md:w-3/5 justify-between xl:hidden 2xl:hidden lg:hidden md:flex sm:flex flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-bold [&>li>a]:text-sm uppercase text-gray-900 mt-2">
              <li>
                <Link href="/Shop">
                  <button
                    href="#"
                    className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase"
                  >
                    <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                    Shop
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/Archive">
                  <button
                    href="#"
                    className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase"
                  >
                    <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                    Archive
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/MyCart">
                  <button
                    href="#"
                    className="font-bold relative overflow-hidden pb-2 btnHome border-black tracking-wider leading-none uppercase"
                  >
                    <span className="absolute inset-x-0 h-[0.15rem] bottom-0 bg-black"></span>
                    Cart
                  </button>
                </Link>
              </li>

              <label htmlFor="check" className="close-menu">
                X
              </label>
            </span>

            <label htmlFor="check" className="open-menu">
              <BiMenu />
            </label>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
