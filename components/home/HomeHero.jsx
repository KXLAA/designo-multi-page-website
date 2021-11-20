import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";

const HeroContainer = styled.section`
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding-left: 97px;
  padding-top: 16px;
  margin-bottom: 160px;
`;

const Text = styled.div`
  padding-right: 97px;
  position: relative;
  z-index: 1;

  h1 {
    color: var(--white);
    padding-bottom: 32px;
  }

  p {
    color: var(--white);
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const HeroImage = styled.img`
  z-index: 1;
`;

const HeroBgPattern = styled.div`
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  width: 630px;
  height: 630px;
  position: absolute;
  right: 0px;
  top: 0px;
  border-radius: 100%;
`;

export default function HomeHero() {
  return (
    <HeroContainer>
      <Text>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>
          <a>LEARN MORE</a>
        </Button>
      </Text>

      <ImageContainer>
        <HeroImage
          src="/assets/home/desktop/image-hero-phone.png"
          alt="Picture of the author"
        />
        <HeroBgPattern />
      </ImageContainer>
    </HeroContainer>
  );
}
