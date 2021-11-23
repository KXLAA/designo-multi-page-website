import React from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "../../styles/utils.module.css";
import Location from "../common/Location";
import { device } from "../common/MediaQueries";
import { useMediaQuery } from "react-responsive";

const DetailContainer = styled.section`
  z-index: 1;
  background-color: #fdf3f0;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 160px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const DetailContainerFlipped = styled(DetailContainer)`
  flex-direction: row-reverse;
  margin-bottom: 60px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Text = styled.div`
  padding: 95px;
  position: relative;
  color: var(--color-primary);

  h1 {
    padding-bottom: 16px;
  }

  p {
    color: var(--dark-gray);
  }
`;

const BgPattern = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 250px;
  left: 190px;
  right: 50px;
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
`;

export default function AboutUsDetail() {
  return (
    <>
      <DetailContainer>
        <Image
          className={styles.ZIndex}
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="illustration-passionate"
          width={2276}
          height={2780}
        />
        <Text>
          <BgPattern />
          <BgPattern style={{ left: "-100px" }} />
          <h1>World-class talent</h1>
          <p style={{ paddingBottom: "32px" }}>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>

          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </Text>
      </DetailContainer>
      <Location />
      <DetailContainerFlipped>
        <Image
          className={styles.ZIndex}
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="illustration-passionate"
          width={2276}
          height={2780}
        />

        <Text>
          <BgPattern />
          <BgPattern style={{ left: "-100px" }} />
          <h1>The real deal</h1>
          <p style={{ paddingBottom: "32px" }}>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>

          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </Text>
      </DetailContainerFlipped>
    </>
  );
}
