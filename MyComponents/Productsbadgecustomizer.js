import React, { useContext, useState, useRef } from "react";
import badge1 from "../public/assets/images/badges/1.png";
import badge2 from "../public/assets/images/badges/2.png";
import badge3 from "../public/assets/images/badges/3.png";
import badge4 from "../public/assets/images/badges/4.png";
import badge5 from "../public/assets/images/badges/5.png";
import badge6 from "../public/assets/images/badges/6.png";
import badge7 from "../public/assets/images/badges/7.png";
import badge8 from "../public/assets/images/badges/8.png";
import badge9 from "../public/assets/images/badges/9.png";
import badge10 from "../public/assets/images/badges/10.png";
import badge11 from "../public/assets/images/badges/11.png";
import badge12 from "../public/assets/images/badges/12.png";
import badge13 from "../public/assets/images/badges/13.png";
import { useDrop } from "react-dnd";
import Dragpicture from "./Dragpicture";
import Dragpicstart from "./Dragpicstart";
import Draggable, { DraggableCore } from "react-draggable";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AppContext } from "@/componentss/context";

// import { useScreenshot } from 'use-react-screenshot'

const Productsbadgecustomizer = ({ customizedProduct }) => {
  const router = useRouter();

  const [cart, setCart] = useContext(AppContext);

  const PictureList = [
    {
      id: 1,
      url: badge1,
      textDesc: "No Hopless,",
      textYear: "2007",
    },
    {
      id: 2,
      url: badge2,
      textDesc: "Stop the Bombs,",
      textYear: "2019",
    },
    {
      id: 3,
      url: badge3,
      textDesc: "Harmless Kitty,",
      textYear: "1994",
    },
    {
      id: 4,
      url: badge4,
      textDesc: "Girl in Red,",
      textYear: "1995",
    },
    {
      id: 5,
      url: badge5,
      textDesc: "Fuck Rotten World,",
      textYear: "2002",
    },
    {
      id: 6,
      url: badge6,
      textDesc: "Yr. Childhood,",
      textYear: "1995",
    },
    {
      id: 7,
      url: badge7,
      textDesc: "Blue Sheep,",
      textYear: "1999",
    },
    {
      id: 8,
      url: badge8,
      textDesc: "Dont Waste Day,",
      textYear: "2009",
    },
    {
      id: 9,
      url: badge9,
      textDesc: "Life is Only One!,",
      textYear: "2007",
    },
    {
      id: 10,
      url: badge10,
      textDesc: "Schalplatten,",
      textYear: "2012",
    },
    {
      id: 11,
      url: badge11,
      textDesc: "No War,",
      textYear: "2019",
    },
    {
      id: 12,
      url: badge12,
      textDesc: "Three stars,",
      textYear: "2014",
    },
    {
      id: 13,
      url: badge13,
      textDesc: "Rock You,",
      textYear: "2010",
    },
  ];
  // const [mainSelectimg, setMainSelectimg] = useState(mainSelectedimg)

  const [board, setBoard] = useState([]);
  const [finalImage, setFinalImage] = useState(null);

  const containerRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [product, setProduct] = useState(customizedProduct);

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  // const captureFinalImage = () => {
  //   return html2canvas(containerRef.current).then((canvas) => {
  //     const imageSrc = canvas.toDataURL("image/png");
  //     setFinalImage(imageSrc);
  //     return imageSrc; // Return the image source
  //   });
  // };

  const handleAddingtoCart = async (product) => {
    // const capturedImage = await captureFinalImage(); // Wait for the image capture

    // if (capturedImage) {
    // Update the product with the captured image source
    // product.images = [{ src: capturedImage }];
    // Include selected sizes in the product object

    localStorage.setItem("forAddToCart", JSON.stringify(product));
    router.push(`/product/${product?.slug}`);

    // const existingCart = JSON.parse(localStorage.getItem("forCart") || null);

    // if (existingCart) {
    //   let existingCartItem;

    //   const updatedCart = existingCart.cartItems;

    //   if (updatedCart.length === 1 || updatedCart.length === undefined) {
    //     if (updatedCart.length === undefined) {
    //       updatedCart.push(product);
    //       let newCartObj = {
    //         cartItems: updatedCart,
    //         totalQty: updatedCart.length || 1,
    //         totalPrice: updatedCart.length * product.price,
    //       };

    //       localStorage.setItem("forCart", JSON.stringify(newCartObj));
    //       setCart(newCartObj);

    //       toast.success("Item has been added to your cart!");
    //     } else {
    //       existingCartItem = updatedCart[0].slug === product.slug;
    //       if (existingCartItem === true) {
    //         toast.error("This Product is already added to your cart");
    //       } else {
    //         product.stock_quantity = 1;
    //         product.totalPrice = parseInt(product.price);
    //         updatedCart.push(product);

    //         let newCartObj = {
    //           cartItems: updatedCart,
    //           totalQty: updatedCart.length || 1,
    //           totalPrice: updatedCart.length * product.price,
    //         };
    //         localStorage.setItem("forCart", JSON.stringify(newCartObj));
    //         setCart(newCartObj);

    //         toast.success("Item has been added to your cart!");
    //       }
    //     }
    //   } else {
    //     existingCartItem = updatedCart.find(
    //       (item) => item.slug === product.slug
    //     );

    //     if (existingCartItem) {
    //       toast.error("This Product is already added to your cart");
    //     } else {
    //       product.stock_quantity = 1;
    //       product.totalPrice = parseInt(product.price);
    //       updatedCart.push(product);
    //       let newCartObj = {
    //         cartItems: updatedCart,
    //         totalQty: updatedCart.length || 1,
    //         totalPrice: updatedCart.length * product.price,
    //       };
    //       localStorage.setItem("forCart", JSON.stringify(newCartObj));
    //       setCart(newCartObj);

    //       toast.success("Item has been added to your cart!");
    //       // router.push(`/MyCart`);
    //     }
    //   }
    // } else {
    //   product.stock_quantity = 1;
    //   product.totalPrice = parseInt(product.price);
    //   console.log("CHECKING PRODUCT leNgth:> ", product, product.length);
    //   let newCartObj = {
    //     cartItems: [product],
    //     totalQty: product.length || 1,
    //     totalPrice: product.stock_quantity * product.price,
    //   };
    //   localStorage.setItem("forCart", JSON.stringify(newCartObj));
    //   setCart(newCartObj);

    //   toast.success("Item has been added to your cart!");
    // }
    // }
  };

  return (
    <div className="mt-10 w-full py-16 overflow-hidden">
      <div>
        <p className="uppercase text-3xl font-bold text-center pb-16">
          PIN IT YOUR WAY
        </p>
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col w-full h-full">
        <div className="lg:w-2/5 md:hidden sm:hidden hidden lg:flex justify-end gap-6 items-center flex-wrap">
          {PictureList.map((picture, index) => {
            if (index < 6) {
              return (
                <div className="text-center w-28" key={index}>
                  <Dragpicstart url={picture.url} id={picture.id} />
                  <p className="w-full text-center overflow-x-auto mx-auto text-xs my-1 font-['Helvetica'] font-bold">
                    {picture.textDesc}
                  </p>
                  <p className="w-full text-center font-['Helvetica'] font-bold overflow-x-auto mx-auto text-xs italic">
                    {picture.textYear}
                  </p>
                </div>
              );
            }
          })}
        </div>

        <div
          className="container-bottom 2xl:w-2/5 lg:w-2/5 md:w-full sm:w-full w-full h-[21rem] relative overflow-hidden flex flex-col justify-center items-center"
          ref={(ref) => {
            containerRef.current = ref;
            drop(ref);
          }}
        >
          <img
            src="../assets/images/naranopins.png"
            className="w-auto my-auto max-h-full 2xl:max-w-fit 2xl:mx-auto"
          />

          {board.map((picture, index) => {
            return (
              <Draggable
                key={index}
                className="drag-react"
                style={{
                  position: "relative",
                  width: "70%",
                  height: "100%",
                  cursor: "move",
                  border: "2px solid pink",
                  overflow: "hidden",
                  margin: "auto",
                }}
              >
                <div className="absolute">
                  <Dragpicture url={picture.url} id={picture.id} />
                </div>
              </Draggable>
            );
          })}
        </div>

        <div className="lg:w-2/5 md:hidden sm:hidden hidden lg:flex justify-start gap-6 items-center flex-wrap">
          {PictureList.map((picture, index) => {
            if (index < 6) {
              return "";
            } else {
              return (
                <div className="text-center w-28" key={index}>
                  <Dragpicstart url={picture.url} id={picture.id} />
                  <p className="w-full text-center overflow-x-auto mx-auto text-xs my-1 font-['Helvetica'] font-bold">
                    {picture.textDesc}
                  </p>
                  <p className="w-full text-center font-['Helvetica'] font-bold overflow-x-auto mx-auto text-xs italic">
                    {picture.textYear}
                  </p>
                </div>
              );
            }
          })}
        </div>

        <div className="overflow-x-auto">
          <div className="lg:hidden md:grid sm:grid grid gap-6 grid-cols-5 space-x-5 place-items-center min-w-[500px] ">
            {PictureList.map((picture, index) => (
              <div className="text-center w-28" key={index}>
                <Dragpicstart url={picture.url} id={picture.id} />
                <p className="w-full text-center overflow-x-auto mx-auto text-xs my-1 font-['Helvetica'] font-bold">
                  {picture.textDesc}
                </p>
                <p className="w-full text-center font-['Helvetica'] font-bold overflow-x-auto mx-auto text-xs italic">
                  {picture.textYear}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='w-full flex justify-center gap-12 items-center py-3'>
            {PictureList.map((picture) => {
                return <Dragpicture url={picture.url} id={picture.id} />
            })}
        </div>
        <div className='Board w-full flex justify-center gap-12 items-center py-3 border-2 border-black h-64' ref={drop}>
            {board.map((picture) => {
                return <Dragpicture url={picture.url} id={picture.id} />
            })}
        </div> */}
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleAddingtoCart(product)}
          className="uppercase mt-4 px-3 py-3 cursor-pointer bg-black duration-150 text-white hover:bg-white hover:text-black font-light tracking-widest text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productsbadgecustomizer;
