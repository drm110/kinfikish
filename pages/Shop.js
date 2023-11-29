import Layout from "@/componentss/layouts";
import Subscribekinki from "@/MyComponents/Subscribekinki";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MetallicDoublebikini from "../public/assets/images/shopitems/MetallicDoublebikini.jpg";
import MetallicShorts from "../public/assets/images/shopitems/MetallicShorts.jpg";
import Quittersneverwin from "../public/assets/images/shopitems/Quittersneverwin.jpg";
import Fishlogoshirt from "../public/assets/images/shopitems/Fishlogoshirt.jpg";
import Charlesbronsonshirt from "../public/assets/images/shopitems/Charlesbronsonshirt.jpg";
import Blokiejapaneselogoeshirt from "../public/assets/images/shopitems/Blokiejapaneseshirt.jpg";
import davidbowieshirt from "../public/assets/images/shopitems/davidbowieshirt.jpg";
import lottosevenshirt from "../public/assets/images/shopitems/lottosevenshirt.jpg";
import windowscreencroptop from "../public/assets/images/shopitems/windowscreencroptop.jpg";
import blackstartcroptop from "../public/assets/images/shopitems/blackstartcroptop.jpg";
import duskvelvetbikini from "../public/assets/images/shopitems/duskvelvetbikini.jpg";
import nightvelvetbikini from "../public/assets/images/shopitems/nightvelvetbikini.jpg";
import axios from "axios";
import Product from "@/MyComponents/Product";

const Shop = ({ headerFooter, products }) => {
  console.log("CHECking products:>> ", products);
  const router = useRouter();
  const shopItems = [
    {
      id: 1,
      slug: "Acid_Spill_Metallic_Shorts",
      title: "Acid Spill Metallic Shorts",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: MetallicShorts,
      price: 150,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 2,
      slug: "Two-Tone_Metallic_Double_Bottom_Bikini_Set",
      title: "Two-Tone Metallic Double Bottom Bikini Set",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: MetallicDoublebikini,
      price: 150,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 3,
      slug: "Quitters_never_win",
      title: "Quitters never win",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: Quittersneverwin,
      price: 120,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 4,
      slug: "FISH_LOGO_SHIRT",
      title: "FISH LOGO SHIRT",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: Fishlogoshirt,
      price: 60,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 5,
      slug: "CHARLES_BRONSON_SHIRT",
      title: "CHARLES BRONSON SHIRT",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: Charlesbronsonshirt,
      price: 70,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 6,
      slug: "BLOKIE_JAPANESE_LOGO_SHIRT",
      title: "BLOKIE JAPANESE LOGO SHIRT",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: Blokiejapaneselogoeshirt,
      price: 70,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 7,
      slug: "DAVID_BOWIE_SHIRT",
      title: "DAVID BOWIE SHIRT",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: davidbowieshirt,
      price: 65,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 8,
      slug: "LOTTO_7_SHIRT",
      title: "LOTTO 7 SHIRT",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: lottosevenshirt,
      price: 60,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 9,
      slug: "WINDOW_SCREEN_CROP_TOP",
      title: "WINDOW SCREEN CROP TOP",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: windowscreencroptop,
      price: 55,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 10,
      slug: "BLACK_STAR_CROP_TOP",
      title: "BLACK STAR CROP TOP",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: blackstartcroptop,
      price: 55,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 11,
      slug: "DUSK_VELVET_BIKINI",
      title: "DUSK VELVET BIKINI",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: duskvelvetbikini,
      price: 100,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
    {
      id: 12,
      slug: "NIGHT_VELVET_BIKINI",
      title: "NIGHT VELVET BIKINI",
      desc: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.",
      image: nightvelvetbikini,
      price: 100,
      sizes: ["XL", "L", "M", "S", "XS"],
    },
  ];

  // const handleAddingtoCart = (shopItem)=>{
  // const shopItemString = JSON.stringify(shopItem);
  // console.log("Item added to cart:", shopItemString);
  // localStorage.setItem('cartItem', shopItemString);
  // router.push(`/addToCart/${shopItem.slug}`)
  // }

  // const handleAddingtoCart = (shopItem) => {
  //   Check if 'cartItem' exists in localStorage
  //   const existingCart = localStorage.getItem('forCart');

  //   if (existingCart) {
  //     Parse the existing cart data
  //     const existingCartItems = JSON.parse(existingCart);

  //     Add the new item to the cart
  //     console.log("CHECKING shopItem being pushed:>> ", shopItem)
  //     existingCartItems.push(shopItem);

  //     Save the updated cart back to localStorage
  //     localStorage.setItem('forCart', JSON.stringify(existingCartItems));
  //   } else {
  //     Create a new cart with the current item

  //     const newCartObj = {
  //       productTitle: shopItem.title,
  //       slug: shopItem.slug,
  //       image: shopItem.image,
  //       price: shopItem.price,
  //       quantity: 1,
  //     }

  //     setNewCart([...newCart, newCartObj])
  //     console.log("HERE CHECKING NEW CART:>> ", newCart)

  //     Save the new cart in localStorage
  //     localStorage.setItem('forCart', JSON.stringify(newCart));

  //     console.log("Item added to cart:", shopItem.title);
  //   }
  // }

  const handleAddingtoCart = (product) => {
    // If the item is not in the cart, add it to the cart
    // const newCartObj = {
    //   productTitle: shopItem.title,
    //   desc: shopItem.desc,
    //   slug: shopItem.slug,
    //   image: shopItem.image,
    //   price: shopItem.price,
    //   size: shopItem.sizes,
    // };

    // Save the updated cart back to localStorage
    localStorage.setItem("forAddToCart", JSON.stringify(product));

    console.log("Item added to cart:", product);
    router.push(`/product/${product.slug}`);
  };

  // console.log("CHECKING Header> ", products)

  return (
    <>
      <Layout headerFooter={headerFooter || ""}>
        <div className="w-full px-3 py-20 overflow-hidden">
          <div>
            <p className="uppercase text-3xl font-bold text-center py-6">
              Shop
            </p>
            {products.length ? (
              ""
            ) : (
              <p className="capitalize text-md font-semibold text-center px-5">
                Note Web is in under development sorry you cannot purchase right
                now but later soon!
              </p>
            )}
          </div>
          <div className="flex flex-col w-full min-h-screen pb-12 text-gray-800">
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
              {/* <!-- Product Tile Start --> */}

              {products.length
                ? products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))
                : shopItems.map((shopItems) => {
                    return (
                      <button
                        className="bg-white cursor-pointer border-2 border-transparent rounded-xl duration-300 hover:border-gray-800"
                        key={shopItems.id}
                      >
                        {/* onClick={() => handleAddingtoCart(shopItems)} */}
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
      </Layout>
    </>
  );
};

export default Shop;

export async function getStaticProps() {
  try {
    const { data: headerFooterData } = await axios.get(
      `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
    );
    const { data: productsData } = await axios.get(
      `https://kinkifish.com/api/get-products`
    );

    return {
      props: {
        headerFooter: headerFooterData.data ?? {},
        products: productsData ?? {},
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log("An error occured while fetching data from server", error);
    return {
      props: {
        headerFooter: "Not found",
        products: 0,
      },
    };
  }

  // console.log("RUNNING CONSOLE IN getstaticprops:> ", productsData)

  // const data = { products: productsData.products ?? {} }
}
