import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";

const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
  position: relative;
`;

const LocationContainer = styled.div`
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

const OrangeButton = styled(Button)`
  background: var(--color-primary);
  color: var(--white);
  margin: 0px;
`;

export default function Location() {
  return (
    <MainContainer>
      <LocationContainer>
        <Image
          src="/assets/shared/desktop/illustration-canada.svg"
          alt="illustration-canada"
          width={250}
          height={250}
        />
        <Text>
          <h3>CANADA</h3>
        </Text>
        <OrangeButton>
          <p>SEE LOCATION</p>
        </OrangeButton>
      </LocationContainer>

      <LocationContainer>
        <Image
          src="/assets/shared/desktop/illustration-australia.svg"
          alt="illustration-australia"
          width={250}
          height={250}
        />
        <Text>
          <h3>AUSTRALIA</h3>
        </Text>
        <OrangeButton>
          <p>SEE LOCATION</p>
        </OrangeButton>
      </LocationContainer>

      <LocationContainer>
        <Image
          src="/assets/shared/desktop/illustration-united-kingdom.svg"
          alt="illustration-canada"
          width={250}
          height={250}
        />
        <Text>
          <h3>UNITED KINGDOM</h3>
        </Text>

        <OrangeButton>
          <p>SEE LOCATION</p>
        </OrangeButton>
      </LocationContainer>
    </MainContainer>
  );
}
