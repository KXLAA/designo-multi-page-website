import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import {
  MainContainer,
  ImageContainer,
  Overlay,
  Image,
  Text,
  ViewProjects,
} from "../common/PageLinks";
import styled from "styled-components";

import { device } from "../common/MediaQueries";

const DesktopImage = styled(Image)`
  @media ${device.tablet} {
    display: none;
  }
`;

const TabletImage = styled(Image)`
  display: none;
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const MobileImage = styled(Image)`
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

export default function WebDesignLinks() {
  return (
    <MainContainer marginBottom="60">
      <Link href="/app-design" passHref>
        <ImageContainer>
          <DesktopImage
            src="/assets/image-for-links/app-design.jpg"
            alt="Picture of the author"
          />

          <TabletImage
            src="/assets/home/tablet/image-web-design.jpg"
            alt="Picture of the author"
          />

          <MobileImage
            src="/assets/home/mobile/image-web-design.jpg"
            alt="Picture of the author"
          />

          <Overlay />

          <Text>
            <h1>APP DESIGN </h1>
            <ViewProjects>
              <p>VIEW PROJECTS</p>
              <FaChevronRight style={{ color: "#E7816B" }} />
            </ViewProjects>
          </Text>
        </ImageContainer>
      </Link>
      <Link href="/graphic-design" passHref>
        <ImageContainer>
          <DesktopImage
            src="/assets/image-for-links/graphic-design.jpg"
            alt="Picture of the author"
          />

          <TabletImage
            src="/assets/home/tablet/image-graphic-design.jpg"
            alt="Picture of the author"
          />

          <MobileImage
            src="/assets/home/mobile/image-graphic-design.jpg"
            alt="Picture of the author"
          />
          <Overlay />

          <Text>
            <h1>GRAPHIC DESIGN </h1>
            <ViewProjects>
              <p>VIEW PROJECTS</p>
              <FaChevronRight style={{ color: "#E7816B" }} />
            </ViewProjects>
          </Text>
        </ImageContainer>
      </Link>
    </MainContainer>
  );
}
