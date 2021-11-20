import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Cta from "../components/common/Cta";
import LocationCards from "../components/locations/LocationCards";

export default function Locations() {
  return (
    <>
      <Layout>
        <Head>
          <title>LOCATIONS | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <LocationCards />
        <Cta />
      </Layout>
      <Footer />
    </>
  );
}
