import React from "react";
import Link from "next/link";
import MyImage from "@/MyComponents/MyImage";
import { addToCart } from "@/Utils";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";

const Product = ({ product }) => {
  const router = useRouter();

  if (isEmpty(product)) {
    return null;
  }

  // const img = product.images?.[0] ?? {};
  const productType = product.type ?? "";

  const handleAddingtoCart = (product) => {
    localStorage.setItem("forAddToCart", JSON.stringify(product));

    console.log("Item added to cart:", product);
    router.push(`/product/${product.slug}`);
  };

  return (
    <div>
      <div
        className="bg-white cursor-pointer border-2 border-transparent rounded-xl duration-300 hover:border-gray-800 text-center"
        onClick={() => handleAddingtoCart(product)}
      >
        <div>
          {/* <img src={product.images[0].src ?? ''} className="h[23.125rem]" alt={product.slug ?? ''} /> */}
          <MyImage
            sourceUrl={product?.yoast_head_json?.og_image[0]?.url}
          altText="product image"
            width={250}
            height={370}
            className="mx-auto"
          />
          <div className="flex items-center justify-center mt-3">
            <div>
              <p className="font-semibold text-center">
                {product?.title?.rendered ?? "Product name here..."}
              </p>
              {/* <p className="text-center font-semibold pb-3"> */}
              {/* ${product.price ?? ''} */}
              <div
                dangerouslySetInnerHTML={{ __html: product?.price_html ?? "" }}
                className="text-center font-semibold pb-3"
              />
              <div className="text-center font-semibold text-red-700 pb-3">
                {product?.stock_status}
              </div>
              {/* </p> */}
            </div>
          </div>
        </div>
        {/* { 'variable' === productType ? <AddToCart product={product}/> : null } */}
      </div>
    </div>
  );
};

export default Product;
