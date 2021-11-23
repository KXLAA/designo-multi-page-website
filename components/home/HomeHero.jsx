import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";
import { device } from "../common/MediaQueries";

const HeroContainer = styled.section`
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding-left: 97px;
  padding-top: 16px;
  margin-bottom: 160px;
  overflow: hidden;

  @media ${device.tablet} {
    text-align: center;
    flex-direction: column;
    padding-left: 0px;
    padding: 97px;
    padding-bottom: 0px;
  }

  @media ${device.mobile} {
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 0px;
    margin-bottom: 118px;
  }
`;

const Text = styled.div`
  padding-right: 97px;
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    flex-direction: column;
    padding-right: 0px;
  }

  h1 {
    color: var(--white);
    padding-bottom: 32px;
  }

  p {
    color: var(--white);
    width: 90%;

    @media ${device.tablet} {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    padding-top: 68px;
  }
`;

const HeroImage = styled.img`
  z-index: 1;

  @media ${device.tablet} {
    display: none;
  }
`;

const HeroImageTablet = styled.img`
  display: none;
  z-index: 1;
  margin: 0 auto;
  @media ${device.tablet} {
    display: block;
  }
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

  @media ${device.tablet} {
    right: -200px;
    top: -350px;
  }
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
        <HeroImageTablet
          src="/assets/home/tablet/tablethero.png"
          alt="Picture of the author"
        />
        <HeroBgPattern />
      </ImageContainer>
    </HeroContainer>
  );
}
