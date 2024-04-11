import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';
import Head from 'next/head';
// types
import type { AppProps } from 'next/app';

// global styles
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
        <Head>

      <link rel="icon" href="/favicon.ico" /> {/* Ruta al archivo favicon */}
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);