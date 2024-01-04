import React from 'react'
import Header from "@/MyComponents/Header";
import Footer from "@/MyComponents/Footer";
import Subscribekinki from '@/MyComponents/Subscribekinki'
import axios from 'axios';

const Exchangepolicy = ({headerFooter}) => {
  return (
    <>
    <Header header={headerFooter} />
    <div className='w-full py-16'>
        <div className='mt-12'>
            <div className="flex flex-col justify-center items-center">
                <p className='uppercase text-3xl font-normal pb-4'>Privacy Policy</p>
                <div className='w-20 border-t-2 border-t-gray-800'></div> 
            </div>
            
            <div className='text-center flex flex-col justify-center items-center mt-12'>
                <p className='w-2/4 mx-auto text-black underline font-bold tracking-wider text-2xl text-center mb-4'>RETURN POLICY</p>
                <p className='w-2/4 mx-auto text-gray-900 font-normal tracking-wider text-center mb-4'>Kinki Fish accepts return of items in exchange for store credit when commenced 1 week after purchase.</p>
            </div>
            <div className='text-center flex flex-col justify-center items-center mt-12'>
            <p className='w-2/4 mx-auto text-black underline font-bold tracking-wider text-2xl text-center mb-4'>EXCHANGE QUALITY</p>
                <p className='w-2/4 mx-auto text-gray-900 font-normal tracking-wider text-center mb-4'>All exchanged items must be sent back in original condition with an email stating exactly what item, color and size they’re looking to get instead. The customer is responsible for the exchanged items’ shipping fees.</p>
            </div>
            <div className='text-center flex flex-col justify-center items-center mt-12'>
            <p className='w-2/4 mx-auto text-black underline font-bold tracking-wider text-2xl text-center mb-4'>OUR VALUES</p>
                <p className='w-2/4 mx-auto text-gray-900 font-normal tracking-wider text-center mb-4'>We reserve the right to reject any exchange and return that shows signs of use.</p>
            </div>
            <div className='text-center flex flex-col justify-center items-center mt-12'>
            <p className='w-2/4 mx-auto text-black underline font-bold tracking-wider text-2xl text-center mb-4'>NON EXCHANGABLE PRODUCT</p>
                <p className='w-2/4 mx-auto text-gray-900 font-normal tracking-wider text-center mb-4'>Swimwear is not eligible for exchange <br/> /returns for hygiene purposes.</p>
            </div>
            <div className='text-center flex flex-col justify-center items-center mt-12'>
            <p className='w-2/4 mx-auto text-black underline font-bold tracking-wider text-2xl text-center mb-4'>CONTACT US</p>
                <p className='w-2/4 mx-auto text-gray-900 font-normal tracking-wider text-center mb-4'>Please contact shopkinkifish@gmail.com for further <br/> assistance.</p>
            </div>
        </div>
    </div>
    <Subscribekinki/>
    <Footer/>
    </>
  )
}

export default Exchangepolicy

export async function getStaticProps() {
    try {
      const { data: headerFooterData } = await axios.get(
        `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
      );
     
  
      return {
        props: {
          headerFooter: headerFooterData.data ?? {},
        },
        revalidate: 1,
      };
    } catch (error) {
      console.log("An error occured while fetching data from server", error);
      return {
        props: {
          headerFooter: "Not found",
        },
      };
    }
  }