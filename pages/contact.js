import React from "react";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Location from "../components/common/location/Location";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>CONTACT US | DESIGNO</title>
          <meta
            name="description"
            content="Award-winning custom designs and digital branding solutions"
          />
          <link rel="icon" href="" />
        </Head>
        <Header />
        <ContactForm />
        <Location />
      </Layout>
      <Footer />
    </>
  );
}
