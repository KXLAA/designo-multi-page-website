import styled from "styled-components";
import React from "react";
import Image from "next/image";
import {
  MainContainer,
  LocationContainer,
  Text,
  OrangeButton,
} from "./Location.styled";

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
