import React from "react";
import styled from "styled-components";
import Location from "../common/location/Location";
import { device } from "../common/MediaQueries";

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
  @media ${device.mobile} {
    border-radius: 0px;
  }
`;

const DetailContainerFlipped = styled(DetailContainer)`
  flex-direction: row-reverse;
  margin-bottom: 60px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const DesktopImage = styled.img`
  z-index: 1;
  @media ${device.tablet} {
    display: none;
  }
`;

const TabletImage = styled.img`
  width: 100%;
  z-index: 1;
  display: none;
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 100%;
  z-index: 1;
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

const Text = styled.div`
  padding: 95px;
  position: relative;
  color: var(--color-primary);
  @media ${device.tablet} {
    padding: 72px;
  }

  @media ${device.mobile} {
    padding: 72px 24px;
  }

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
        <DesktopImage
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="world-class-talent"
        />
        <TabletImage
          src="/assets/about/tablet/image-world-class-talent.jpg"
          alt="world-class-talent"
        />

        <MobileImage
          src="/assets/about/mobile/image-world-class-talent.jpg"
          alt="world-class-talent"
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
        <DesktopImage
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="image-real-deal"
        />

        <TabletImage
          src="/assets/about/tablet/image-real-deal.jpg"
          alt="image-real-deal"
        />

        <MobileImage
          src="/assets/about/mobile/image-real-deal.jpg"
          alt="image-real-deal"
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
