import React from "react";
import { HeroContainer, Text } from "../common/PageHero";
import { BgPattern } from "../common/BgPattern";

export default function GraphicDesignHero() {
  return (
    <HeroContainer>
      <BgPattern />
      <Text>
        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Text>
    </HeroContainer>
  );
}
