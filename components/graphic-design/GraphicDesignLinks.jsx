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

export default function GraphicDesignLinks() {
  return (
    <MainContainer marginBottom="60">
      <Link href="/app-design" passHref>
        <ImageContainer>
          <Image
            src="/assets/image-for-links/app-design.jpg"
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
              <p>WEB PROJECTS</p>
              <FaChevronRight style={{ color: "#E7816B" }} />
            </ViewProjects>
          </Text>
        </ImageContainer>
      </Link>
    </MainContainer>
  );
}
