import styled from "styled-components";
import { device } from "./MediaQueries";
import Link from "next/link";
import { Button } from "./Button";
import { BgPatternSmall } from "./BgPattern";

export const CtaContainer = styled.section`
  padding: 72px 95px;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  top: 100px;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 72px 32px;
  }

  @media ${device.mobile} {
    margin-left: 24px;
    margin-right: 24px;
    padding: 68px 24px;
  }
`;

export const Text = styled.div`
  position: relative;
  color: var(--white);
  width: 50%;

  @media ${device.tablet} {
    width: 60%;
    text-align: center;
  }

  @media ${device.mobile} {
    width: 100%;
  }

  h1 {
    padding-bottom: 16px;
  }
`;

export default function Cta() {
  return (
    <CtaContainer>
      <Text>
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </Text>

      <Link href="/contact" passHref>
        <Button style={{ zIndex: "1" }}>
          <p>GET IN TOUCH</p>
        </Button>
      </Link>
    </CtaContainer>
  );
}
