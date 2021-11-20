import styled from "styled-components";
import Image from "next/image";
import styles from "../../styles/utils.module.css";

import React from "react";

const LocationContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
`;

const LocationContainerFlipped = styled(LocationContainer)`
  flex-direction: row-reverse;
`;

const LocationContainerLast = styled(LocationContainer)`
  margin-bottom: 60px;
`;

const LocationCard = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 97px;
  background: #fdf3f0;
  border-radius: 15px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #e7816b;
    padding-bottom: 24px;
  }
`;

const TextItemContainer = styled.div`
  display: flex;
  gap: 112px;
`;

const TextItem = styled.div``;

const BgPattern01 = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 292px;
  height: 292px;

  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.06;
  transform: matrix(0, 1, 1, 0, 0, 0);
  bottom: 0;
  left: 290px;
`;

const BgPattern02 = styled(BgPattern01)`
  transform: matrix(1, 0, 0, -1, 0, 0);
  left: 0;
`;

export default function LocationCards() {
  return (
    <section>
      <LocationContainer>
        <LocationCard>
          <BgPattern01 />
          <BgPattern02 />
          <Text>
            <h1>Canada</h1>

            <TextItemContainer>
              <TextItem>
                <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </TextItem>

              <TextItem>
                <p style={{ fontWeight: "bold" }}>Contact</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </TextItem>
            </TextItemContainer>
          </Text>
        </LocationCard>
        <Image
          className={styles.borderRadiusImage}
          src="/assets/locations/desktop/image-map-canada.png"
          alt="illustration-passionate"
          width={350}
          height={326}
        />
      </LocationContainer>

      <LocationContainerFlipped>
        <LocationCard>
          <BgPattern01 />
          <BgPattern02 />
          <Text>
            <h1>Australia</h1>

            <TextItemContainer>
              <TextItem>
                <p style={{ fontWeight: "bold" }}>Designo AU Office</p>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </TextItem>

              <TextItem>
                <p style={{ fontWeight: "bold" }}>Contact</p>
                <p>P : (02) 6720 9092</p>
                <p>M : contact@designo.au</p>
              </TextItem>
            </TextItemContainer>
          </Text>
        </LocationCard>
        <Image
          className={styles.borderRadiusImage}
          src="/assets/locations/desktop/image-map-australia.png"
          alt="image-map-australia"
          width={350}
          height={326}
        />
      </LocationContainerFlipped>

      <LocationContainerLast>
        <LocationCard>
          <BgPattern01 />
          <BgPattern02 />
          <Text>
            <h1>United Kingdom</h1>

            <TextItemContainer>
              <TextItem>
                <p style={{ fontWeight: "bold" }}>Designo UK Office</p>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </TextItem>

              <TextItem>
                <p style={{ fontWeight: "bold" }}>Contact</p>
                <p>P : 078 3115 1400</p>
                <p>M : contact@designo.uk</p>
              </TextItem>
            </TextItemContainer>
          </Text>
        </LocationCard>
        <Image
          className={styles.borderRadiusImage}
          src="/assets/locations/desktop/image-map-united-kingdom.png"
          alt="image-map-australia"
          width={350}
          height={326}
        />
      </LocationContainerLast>
    </section>
  );
}
