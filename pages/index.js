import NewTshirts from "@/MyComponents/NewTshirts";
import Customizae from "@/MyComponents/Customizae";
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

// {headerFooter}
export default function Home({ media }) {
  console.log(media);

  let reload = false;
  useEffect(() => {
    reload = true;

    return () => {
      reload = false;
    };
  }, []);

  return (
    // headerFooter={headerFooter}
    <Layout>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {/* <div className="myloadingBody"></div> */}
        {/* <Header header={headerFooter}/> */}
        {/* <NewTshirts products={products} /> */}
        <NewTshirts />
        <Productsbadgecustomizer />
        <Customizae />
        <Followinstagram media={media} />
        <Followtiktok />
        <Subscribekinki />
        {/* <Footer/> */}
      </DndProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { data: media } = await axios.get(
      `https://v1.nocodeapi.com/tabish/instagram/JiXUmqEQCAemqDHu`
    );
    console.log("RUNNING CONSOLE IN getstaticprops:> ", media);

    return {
      props: {
        media: media?.data ?? {},
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log("An error occured while fetching data from server", error);
    return {
      props: {
        media: 0,
      },
    };
  }
}
