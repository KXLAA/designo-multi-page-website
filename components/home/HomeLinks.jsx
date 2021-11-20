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

export default function HomeLinks() {
  return (
    <MainContainer marginBottom={160}>
      <Link href="/web-design" passHref>
        <ImageContainer>
          <Image
            src="/assets/image-for-links/web-design-large.jpg"
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
            <Image
              src="/assets/image-for-links/app-design.jpg"
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
            <Image
              src="/assets/image-for-links/graphic-design.jpg"
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
    </MainContainer>
  );
}
