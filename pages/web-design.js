import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Cta from "../components/common/Cta";
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
