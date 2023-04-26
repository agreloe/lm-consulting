import '@/styles/globals.scss'
import React, { Fragment, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  },[])
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}
