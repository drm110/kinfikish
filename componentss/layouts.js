

import '@/styles/globals.css'
import { AppProvider } from '@/componentss/context';
import Header from '@/MyComponents/Header';
import Footer from '@/MyComponents/Footer';

export default function Layout({ children, headerFooter }) {
  const {header, footer} = headerFooter || {};
  console.log("CHECecking Inside Layout:>> ", header)
  return (
    <AppProvider>
      <Header header={header}/>
        <main className='w-full overflow-hidden'>{children}</main>
      <Footer />
    </AppProvider>
  )
}