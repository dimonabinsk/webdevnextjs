/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app";

import Head from "next/head";

import Layout from "../components/Layout";
import Image from "next/image";
import devImg from "../public/dev.png";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Corinthia&family=Dancing+Script&family=Noto+Sans+Display:wght@300;400;500;600;700&family=Readex+Pro:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={devImg}
      alt="developer"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
