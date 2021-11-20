import React from "react";
import styled from "styled-components";
import Image from "next/image";

const MainContainer = styled.section`
  display: flex;
  gap: 32px;
  margin-bottom: 60px;
  position: relative;
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.div`
  color: var(--dark-gray);
  text-align: center;
  h3 {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export default function HomeFeatures() {
  return (
    <MainContainer>
      <FeatureContainer>
        <Image
          src="/assets/home/desktop/illustration-passionate.svg"
          alt="illustration-passionate"
          width={250}
          height={250}
        />
        <Text>
          <h3>PASSIONATE</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </Text>
      </FeatureContainer>
      <FeatureContainer>
        <Image
          src="/assets/home/desktop/illustration-resourceful.svg"
          alt="illustration-resourceful"
          width={250}
          height={250}
        />
        <Text>
          <h3>RESOURCEFUL</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </Text>
      </FeatureContainer>

      <FeatureContainer>
        <Image
          src="/assets/home/desktop/illustration-friendly.svg"
          alt="illustration-friendly"
          width={250}
          height={250}
        />
        <Text>
          <h3>FRIENDLY</h3>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </Text>
      </FeatureContainer>
    </MainContainer>
  );
}
