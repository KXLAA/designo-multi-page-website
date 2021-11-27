import React from "react";
import { BgPatternSmall } from "../BgPattern";
import { Button } from "../Button";
import Link from "next/link";
import { CtaContainer, Text } from "./Cta.styled";

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
