import React from "react";
import { HeroContainer, Text } from "../common/PageHero";
import { BgPattern } from "../common/BgPattern";

export default function AppDesignHero() {
  return (
    <HeroContainer>
      <BgPattern />
      <Text>
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </Text>
    </HeroContainer>
  );
}
