import React from "react";
import HomeFeatures from "./HomeFeatures";
import HomeHero from "./HomeHero";
import HomeLinks from "./HomeLinks";
import Cta from "../common/Cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeLinks />
      <HomeFeatures />
      <Cta />
    </>
  );
}
