import '@/styles/globals.scss'
import React, { Fragment } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}
