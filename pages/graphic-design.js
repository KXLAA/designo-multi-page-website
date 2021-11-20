import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Cta from "../components/common/Cta";
import GraphicDesignHero from "../components/graphic-design/GraphicDesignHero";
import GraphicDesignProjects from "../components/graphic-design/GraphicDesignProjects";
import GraphicDesignLinks from "../components/graphic-design/GraphicDesignLinks";

export default function GraphicDesign() {
  return (
    <>
      <Layout>
        <Head>
          <title>GRAPHIC DESIGN PROJECTS | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <GraphicDesignHero />
        <GraphicDesignProjects />
        <GraphicDesignLinks />
        <Cta />
      </Layout>
      <Footer />
    </>
  );
}
