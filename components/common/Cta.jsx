import React from "react";
import styled from "styled-components";
import { BgPatternSmall } from "./BgPattern";
import { Button } from "./Button";
import Link from "next/link";

const CtaContainer = styled.section`
  padding: 72px 95px;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  top: 100px;
`;

const Text = styled.div`
  position: relative;
  color: var(--white);
  width: 50%;
  h1 {
    padding-bottom: 16px;
  }
`;

export default function Cta() {
  return (
    <CtaContainer>
      <BgPatternSmall />
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
