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

const Container = styled(MainContainer)`
  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 118px;
  }
`;

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

export default function HomeLinks() {
  return (
    <Container marginBottom={160}>
      <Link href="/web-design" passHref>
        <ImageContainer>
          <DesktopImage
            src="/assets/image-for-links/web-design-large.jpg"
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
            <h1>WEB DESIGN </h1>
            <ViewProjects>
              <p>VIEW PROJECTS</p>
              <FaChevronRight style={{ color: "var(--color-primary)" }} />
            </ViewProjects>
          </Text>
        </ImageContainer>
      </Link>

      <div>
        <Link href="/app-design" passHref>
          <ImageContainer style={{ marginBottom: "24px" }}>
            <Overlay />
            <DesktopImage
              src="/assets/image-for-links/app-design.jpg"
              alt="Picture of the author"
            />

            <TabletImage
              src="/assets/home/tablet/image-app-design.jpg"
              alt="Picture of the author"
            />

            <MobileImage
              src="/assets/home/mobile/image-app-design.jpg"
              alt="Picture of the author"
            />

            <Text>
              <h1>APP DESIGN</h1>
              <ViewProjects>
                <p>VIEW PROJECTS</p>
                <FaChevronRight style={{ color: "var(--color-primary)" }} />
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
              <h1>GRAPHIC DESIGN</h1>
              <ViewProjects>
                <p>VIEW PROJECTS</p>
                <FaChevronRight style={{ color: "var(--color-primary)" }} />
              </ViewProjects>
            </Text>
          </ImageContainer>
        </Link>
      </div>
    </Container>
  );
}
