import NewTshirts from "@/MyComponents/NewTshirts";
import Customizae from "@/MyComponents/Customizae";
import Crochetcapsule from "@/MyComponents/Crochetcapsule";
import Shopnewcollection from "@/MyComponents/Shopnewcollection";
import Collections from "@/MyComponents/Collections";
import Followinstagram from "@/MyComponents/Followinstagram";
import Followtiktok from "@/MyComponents/Followtiktok";
import Subscribekinki from "@/MyComponents/Subscribekinki";
import Productsbadgecustomizer from "@/MyComponents/Productsbadgecustomizer";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import Layout from "@/componentss/layouts";
import axios from "axios";
import { isEmpty } from "lodash";

// {headerFooter}
export default function Home({ headerFooter, products }) {
  let reload = false;
  useEffect(() => {
    reload = true;

    return () => {
      reload = false;
    };
  }, []);

  return (
    // headerFooter={headerFooter}
    <Layout headerFooter={headerFooter}>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {/* <div className="myloadingBody"></div> */}
        {/* <Header header={headerFooter}/> */}
        {/* <NewTshirts products={products} /> */}
        <NewTshirts />
        <Crochetcapsule />
        <Shopnewcollection />
        <Productsbadgecustomizer
          customizedProduct={
            !isEmpty(products)
              ? products.find((item) => item.slug === "customized-shirt")
              : {}
          }
        />
        <Customizae />
        <div className="pt-24 pb-12 flex justify-evenly">
          <Followinstagram />
          <Followtiktok />
        </div>
        <Subscribekinki />
        {/* <Footer/> */}
      </DndProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { data: headerFooterData } = await axios.get(
      `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
    );
    const { data: productsData } = await axios.get(
      `https://kinkifish.com/api/get-products`
      // `https://kinkifish-new.vercel.app/api/get-products`
    );

    return {
      props: {
        headerFooter: headerFooterData.data ?? {},
        products: productsData.products ?? {},
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
}
