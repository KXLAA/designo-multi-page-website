import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Cta from "../components/common/cta/Cta";
import WebDesignHero from "../components/web-design/WebDesignHero";
import WebDesignProjects from "../components/web-design/WebDesignProjects";
import WebDesignLinks from "../components/web-design/WebDesignLinks";

export default function WebDesign() {
  return (
    <>
      <Layout>
        <Head>
          <title>WEB DESIGN PROJECTS | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <WebDesignHero />
        <WebDesignProjects />
        <WebDesignLinks />
        <Cta />
      </Layout>
      <Footer />
    </>
  );
}
