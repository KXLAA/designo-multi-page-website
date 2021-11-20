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

export default function AppDesignLinks() {
  return (
    <MainContainer marginBottom="60">
      <Link href="/web-design" passHref>
        <ImageContainer>
          <Image
            src="/assets/image-for-links/web-design.jpg"
            alt="Picture of the author"
          />
          <Overlay />

          <Text>
            <h1>WEB DESIGN </h1>
            <ViewProjects>
              <p>VIEW PROJECTS</p>
              <FaChevronRight style={{ color: "#E7816B" }} />
            </ViewProjects>
          </Text>
        </ImageContainer>
      </Link>
      <Link href="/graphic-design" passHref>
        <ImageContainer>
          <Image
            src="/assets/image-for-links/graphic-design.jpg"
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
