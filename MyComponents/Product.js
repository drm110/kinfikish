import React from "react";
import Link from "next/link";
import MyImage from "@/MyComponents/MyImage";
import { addToCart } from "@/Utils";
import { isEmpty } from "lodash";

const Product = ({ product, i }) => {
  console.log(i, "u gere");

  if (isEmpty(product)) {
    return null;
  }

  // const img = product.images?.[0] ?? {};
  const productType = product?.type ?? "";

  const handleAddingtoCart = (product) => {
    localStorage.setItem("forAddToCart", JSON.stringify(product));

    console.log("Item added to cart:", product);
  };

  return (
    <Link href={`/product/${product?.slug}`}>
      <div
        className="bg-white cursor-pointer border-2 border-transparent rounded-xl duration-300 hover:border-gray-800 text-center"
        onClick={() => handleAddingtoCart(product)}
      >
        <div className="min-h-[330px] flex flex-col justify-between">
          {/* <img src={product.images[0].src ?? ''} className="h[23.125rem]" alt={product.slug ?? ''} /> */}
          <MyImage
            sourceUrl={product?.images[0].src ?? ""}
            altText={product?.images[0].alt ?? ""}
            width={250}
            height={370}
            className="mx-auto min-h-[225px]"
          />
          <div
            className={`flex items-center justify-center ${
              i === 0 ? "mb-6" : "mt-3"
            }`}
          >
            <div>
              <p className="font-semibold text-center">
                {product?.name ?? "Product name here..."}
              </p>
              {/* <p className="text-center font-semibold pb-3"> */}
              {/* ${product.price ?? ''} */}
              {product.stock_status === "instock" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.price_html ?? "",
                  }}
                  className="text-center font-semibold pb-3"
                />
              ) : (
                <p className="font-semibold text-center text-red-500 pb-3">
                  OUT OF STOCK
                </p>
              )}

              {/* </p> */}
            </div>
          </div>
        </div>
        {/* { 'variable' === productType ? <AddToCart product={product}/> : null } */}
      </div>
    </Link>
  );
};

export default Product;
