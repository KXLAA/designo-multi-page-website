import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Cta from "../components/common/cta/Cta";
import AppDesignHero from "../components/app-design/AppDesignHero";
import AppDesignProjects from "../components/app-design/AppDesignProjects";
import AppDesignLinks from "../components/app-design/AppDesignLinks";

export default function AppDesign() {
  return (
    <>
      <Layout>
        <Head>
          <title>APP DESIGN PROJECTS | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <AppDesignHero />
        <AppDesignProjects />
        <AppDesignLinks />
        <Cta />
      </Layout>
      <Footer />
    </>
  );
}
