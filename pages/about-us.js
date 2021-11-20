import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Cta from "../components/common/Cta";
import AboutUsHero from "../components/about-us/AboutUsHero";
import AboutUsDetail from "../components/about-us/AboutUsDetail";

export default function AboutUs() {
  return (
    <>
      <Layout>
        <Head>
          <title>ABOUT US | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <AboutUsHero />
        <AboutUsDetail />
        <Cta />
      </Layout>
      <Footer />
    </>
  );
}
