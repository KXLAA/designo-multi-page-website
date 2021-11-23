import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../common/MediaQueries";
import styles from "../../styles/utils.module.css";

const DesktopImage = styled.img`
  z-index: 1;
  @media ${device.tablet} {
    display: none;
  }
`;

const TabletImage = styled.img`
  width: 100%;
  z-index: 1;
  display: none;
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 100%;
  z-index: 1;
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

export const HeroContainer = styled.section`
  z-index: 1;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 160px;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }

  @media ${device.mobile} {
    border-radius: 0px;
  }
`;

export const Text = styled.div`
  padding-left: 95px;
  padding-right: 95px;
  position: relative;
  color: var(--white);

  @media ${device.tablet} {
    padding: 68px;
    text-align: center;
  }

  @media ${device.mobile} {
    padding: 72px 24px;
  }

  h1 {
    padding-bottom: 16px;
  }
`;

export const BgPattern = styled.div`
  position: absolute;
  left: 10px;
  height: 640px;
  width: 640px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export default function AboutUsHero() {
  return (
    <>
      <HeroContainer>
        <BgPattern />
        <Text>
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </Text>

        <DesktopImage
          src="/assets/about/desktop/image-about-hero.jpg"
          alt="illustration-passionate"
        />

        <TabletImage
          src="/assets/about/tablet/image-about-hero.jpg"
          alt="illustration-passionate"
        />

        <MobileImage
          src="/assets/about/mobile/image-about-hero.jpg"
          alt="illustration-passionate"
        />

        {/* <Image
          className={styles.desktopImage}
          src="/assets/about/desktop/image-about-hero.jpg"
          alt="illustration-passionate"
          width={2176}
          height={2180}
        /> */}
      </HeroContainer>
    </>
  );
}
