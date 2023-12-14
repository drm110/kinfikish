import Subscribekinki from "@/MyComponents/Subscribekinki";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import MetallicDoublebikini from "../../public/assets/images/shopitems/MetallicDoublebikini.jpg";
import MetallicShorts from "../../public/assets/images/shopitems/MetallicShorts.jpg";
import Quittersneverwin from "../../public/assets/images/shopitems/Quittersneverwin.jpg";
import Fishlogoshirt from "../../public/assets/images/shopitems/Fishlogoshirt.jpg";
import Header from "@/MyComponents/Header";
import Footer from "@/MyComponents/Footer";
import MyImage from "@/MyComponents/MyImage";
import { toast } from "react-toastify";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page({headerFooter}) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Description");
  const [selectedBra, setSelectedBra] = useState("Choose an option");
  const [selectedBottom, setSelectedBottom] = useState("Choose an option");
  const [selectedSize, setSelectedSize] = useState("Choose an option");

  const tabs = [
    { name: "Description", current: activeTab === "Description" },
    {
      name: "SIZE CHART",
      current: activeTab === "SIZE CHART",
    },
  ];

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    product ? product.images[0].src : ""
  );

  useEffect(() => {
    const fetchData = async () => {
      const cartData = JSON.parse(localStorage.getItem("forAddToCart") || "[]");

      await setProduct(cartData);
      if (cartData && cartData.images && cartData.images.length > 0) {
        setSelectedImage(cartData.images[0].src);
      }
    };

    fetchData();
  }, [router.query.slug]);

  const handleAddingtoCart = async (product) => {
    // Include selected sizes in the product object
    product.selectedBra = selectedBra;
    product.selectedBottom = selectedBottom;
    const existingCart = JSON.parse(localStorage.getItem("forCart") || null);

    if (existingCart) {
      let existingCartItem;

      const updatedCart = existingCart.cartItems;

      if (updatedCart.length === 1 || updatedCart.length === undefined) {
        if (updatedCart.length === undefined) {
          updatedCart.push(product);
          let newCartObj = {
            cartItems: updatedCart,
            totalQty: updatedCart.length || 1,
            totalPrice: updatedCart.length * product.price,
          };

          localStorage.setItem("forCart", JSON.stringify(newCartObj));
          toast.success("Item has been added to cart!");
        } else {
          existingCartItem = updatedCart[0].slug === product.slug;
          if (existingCartItem === true) {
            toast.error("This Product is already added to your cart");
          } else {
            product.stock_quantity = 1;
            product.totalPrice = parseInt(product.price);
            product.selectedBra = selectedBra;
            product.selectedBottom = selectedBottom;
            updatedCart.push(product);

            let newCartObj = {
              cartItems: updatedCart,
              totalQty: updatedCart.length || 1,
              totalPrice: updatedCart.length * product.price,
            };
            localStorage.setItem("forCart", JSON.stringify(newCartObj));
            toast.success("Item has been added to cart!");
          }
        }
      } else {
        existingCartItem = updatedCart.find(
          (item) => item.slug === product.slug
        );

        if (existingCartItem) {
          toast.error("This Product is already added to your cart");
        } else {
          product.stock_quantity = 1;
          product.totalPrice = parseInt(product.price);
          product.selectedBra = selectedBra;
          product.selectedBottom = selectedBottom;
          updatedCart.push(product);
          let newCartObj = {
            cartItems: updatedCart,
            totalQty: updatedCart.length || 1,
            totalPrice: updatedCart.length * product.price,
          };
          localStorage.setItem("forCart", JSON.stringify(newCartObj));
          toast.success("Item has been added to cart!");
          router.push(`/MyCart`);
        }
      }
    } else {
      product.stock_quantity = 1;
      product.totalPrice = parseInt(product.price);
      product.selectedBra = selectedBra;
      product.selectedBottom = selectedBottom;
      console.log("CHECKING PRODUCT leNgth:> ", product, product.length);
      let newCartObj = {
        cartItems: [product],
        totalQty: product.length || 1,
        totalPrice: product.stock_quantity * product.price,
      };
      localStorage.setItem("forCart", JSON.stringify(newCartObj));
      toast.success("Item has been added to cart!");
    }
  };

  const handleBraChange = (e) => {
    setSelectedBra(e.target.value);
  };

  const handleBottomChange = (e) => {
    setSelectedBottom(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let isBikni = product?.categories?.find((i) => i.name === "bikni");
  let isShirt = product?.categories?.find((i) => i.name === "shirt");
  let isSizeChart = product?.attributes?.find((i) => i.name === "SIZE CHART");

  console.log(isSizeChart, "afafasdfasd");

  return (
    <>
      <Header header={headerFooter} />

      <div className="container mx-auto px-2 sm:px-4 lg:px-5 py-8">
        <div className="border-r border-r-[#dddddd] md:pr-[60px] w-full md:w-[70%] my-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* image part */}
            <div className="flex flex-col">
              <div className="mb-[15px]">
                <InnerImageZoom
                  src={selectedImage}
                  hasSpacer={true}
                  zoomSrc={selectedImage}
                  zoomType="hover"
                  zoomPreload={true}
                  fullscreenOnMobile={true}
                />
              </div>
              {/* other image */}
              <div className="flex items-center flex-wrap gap-[15px]">
                {product &&
                  product?.images.map((item) => (
                    <img
                      src={item.src}
                      onClick={() => handleImageClick(item.src)}
                      className="w-[calc(25%-0.75em)] h-[87px] cursor-pointer"
                      style={{
                        opacity: selectedImage === item.src ? "1" : ".4",
                      }}
                    />
                  ))}
              </div>
            </div>
            {/* form part */}
            <div>
              <h1 className="my-[15px] text-[2rem] leading-[1.2] text-[#3a3a3a]">
                {product?.name}
              </h1>
              <p className="text-[#4B4F58] text-[1.5rem] font-bold">
                ${product != null ? product.price : "Loading.."}
              </p>
              {isBikni && (
                <>
                  <div className="mt-4">
                    <label
                      htmlFor="bra"
                      className="block font-bold !leading-[2em] text-gray-600"
                    >
                      BRA
                    </label>
                    <select
                      id="bra"
                      name="bra"
                      className="mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-gray-300 text-[1rem]"
                      value={selectedBra}
                      onChange={handleBraChange}
                    >
                      <option>Choose an option</option>
                      {product?.attributes?.[0]?.options.map(
                        (option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="bottom"
                      className="block font-bold !leading-[2em] text-gray-600"
                    >
                      BOTTOM
                    </label>
                    <select
                      id="bottom"
                      name="bottom"
                      className="mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-gray-300 text-[1rem]"
                      value={selectedBottom}
                      onChange={handleBottomChange}
                    >
                      <option>Choose an option</option>
                      {product?.attributes?.[0]?.options.map(
                        (option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </>
              )}
              {/* is shirt */}
              {isShirt && (
                <>
                  <label
                    htmlFor="size"
                    className="block font-bold !leading-[2em] text-gray-600"
                  >
                    size
                  </label>
                  <select
                    id="size"
                    name="size"
                    className="mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-gray-300 text-[1rem]"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option>Choose an option</option>
                    {product?.attributes?.[0]?.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {/* avbail */}
              {(selectedBra !== "Choose an option" &&
                selectedBottom !== "Choose an option") ||
                (selectedSize !== "Choose an option" && (
                  <p className="font-bold text-[1em] mt-4">
                    Availability:{" "}
                    <span
                      className={`${
                        product?.stock_status === "instock"
                          ? "text-[#77a464]"
                          : "text-red-400"
                      } font-normal`}
                    >
                      {product?.stock_status === "instock"
                        ? "In Stock"
                        : "Out Of Stock"}
                    </span>
                  </p>
                ))}
              {/* add */}
              {isShirt?.name === "shirt" ? (
                <button
                type="button"
                className={`py-[10px] px-[20px] border border-[#323232] font-semibold bg-[#000000] hover:bg-[#3a3a3a] mt-4 text-white  ${
                  selectedSize === "Choose an option"
                    ||
                  product?.stock_status !== "instock"
                    ? "cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  selectedSize === "Choose an option"
                    ||
                  product?.stock_status !== "instock"
                }
                onClick={() => handleAddingtoCart(product)}
              >
                Add to Cart
              </button>
              ) : (
                <button
                type="button"
                className={`py-[10px] px-[20px] border border-[#323232] font-semibold bg-[#000000] hover:bg-[#3a3a3a] mt-4 text-white  ${
                  (selectedBra === "Choose an option" ||
                    selectedBottom === "Choose an option") ||
                  product?.stock_status !== "instock"
                    ? "cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  (selectedBra === "Choose an option" ||
                    selectedBottom === "Choose an option") ||
                  product?.stock_status !== "instock"
                }
                onClick={() => handleAddingtoCart(product)}
              >
                Add to Cart
              </button>
              )}
              {/* add */}
             
              {/* divider */}
            </div>
          </div>

          {/* below */}
          <div className="tabs- mt-24">
            <div className="">
              <div className="border-t border-gray-200">
                <nav className="-mt-px flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-black"
                          : "border-transparent hover:border-gray-300",
                        "whitespace-nowrap border-t-4 py-4 px-1 text-sm cursor-pointer font-bold text-[#515151]"
                      )}
                      onClick={() => handleTabClick(tab.name)}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            {/* tab content */}
            {activeTab === "Description" && (
              <p
                className="text-gray-500 space-y-5 mt-3"
                dangerouslySetInnerHTML={{ __html: product?.description ?? "" }}
              />
            )}
            {activeTab === "SIZE CHART" && (
              <div>
                {isBikni && (
                  <>
                    <div className="flex items-center border border-gray-300">
                      <p className="border-r p-3 w-32">BRA</p>
                      <p className="p-3">
                        {" "}
                        {product?.attributes?.[0]?.options.map(
                          (item, index) => (
                            <span key={index}>
                              {item}
                              {index <
                                product.attributes[0].options.length - 1 &&
                                ", "}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                    <div className="flex items-center border-r border-l border-b border-gray-300">
                      <p className="border-r p-3 w-32">BOTTOM</p>
                      <p className="p-3">
                        {" "}
                        {product?.attributes?.[0]?.options.map(
                          (item, index) => (
                            <span key={index}>
                              {item}
                              {index <
                                product.attributes[0].options.length - 1 &&
                                ", "}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                    {isSizeChart && (
                      <div className="flex items-center border-l border-r border-b border-gray-300">
                        <p className="border-r p-3 w-32">SIZE CHART</p>
                        <p className="p-3">
                          {isSizeChart.options.map((item, index) => (
                            <span key={index}>
                              {item}
                              {index < isSizeChart.options.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                  </>
                )}

                {isShirt && (
                  <>
                    <div className="flex items-center border border-gray-300">
                      <p className="border-r p-3 w-32">size</p>
                      <p className="p-3">
                        {product?.attributes?.[0]?.options.map(
                          (item, index) => (
                            <span key={index}>
                              {item}
                              {index <
                                product.attributes[0].options.length - 1 &&
                                ", "}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                    {isSizeChart && (
                      <div className="flex items-center border-l border-r border-b border-gray-300">
                        <p className="border-r p-3 w-32">SIZE CHART</p>
                        <p className="p-3">
                          {isSizeChart.options.map((item, index) => (
                            <span key={index}>
                              {item}
                              {index < isSizeChart.options.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* related products */}
          <h2 className="text-[1.5rem] mt-6">Related Products</h2>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-12 pb-12">
            {shopItems.map((shopItems) => {
              return (
                <button
                  className="bg-white cursor-pointer border-2 border-transparent rounded-xl duration-300 hover:border-gray-800"
                  key={shopItems.id}
                >
                  <Image
                    src={shopItems.image}
                    height={370}
                    alt={shopItems.slug}
                  />
                  <div className="flex items-center justify-center mt-3">
                    <div>
                      <p className="font-semibold text-center">
                        {shopItems.title}
                      </p>
                      <p className="text-center font-semibold pb-3">
                        ${shopItems.price}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Subscribekinki />
      <Footer />
    </>
  );
}

export const shopItems = [
  {
    id: 1,
    slug: "Acid_Spill_Metallic_Shorts",
    title: "Acid Spill Metallic Shorts",
    desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
    image: MetallicShorts,
    price: 150,
    totalprice: 150,
  },
  {
    id: 2,
    slug: "Two-Tone_Metallic_Double_Bottom_Bikini_Set",
    title: "Two-Tone Metallic Double Bottom Bikini Set",
    desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
    image: MetallicDoublebikini,
    price: 150,
    totalprice: 150,
  },
  {
    id: 3,
    slug: "Quitters_never_win",
    title: "Quitters never win",
    desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
    image: Quittersneverwin,
    price: 120,
    totalprice: 120,
  },
  {
    id: 4,
    slug: "FISH_LOGO_SHIRT",
    title: "FISH LOGO SHIRT",
    desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
    image: Fishlogoshirt,
    price: 60,
    totalprice: 60,
  },
];


