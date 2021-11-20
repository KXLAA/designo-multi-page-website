import React from "react";
import { HeroContainer, Text } from "../common/PageHero";
import { BgPattern } from "../common/BgPattern";

export default function WebDesignHero() {
  return (
    <HeroContainer>
      <BgPattern />
      <Text>
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </Text>
    </HeroContainer>
  );
}
