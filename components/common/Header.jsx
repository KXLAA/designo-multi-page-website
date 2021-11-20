import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import styles from "../../styles/utils.module.css";

const HeaderContainer = styled.header`
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 42px;

  a {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image
          className={styles.cursor}
          src="/assets/shared/desktop/logo-dark.png"
          alt="designo-logo"
          width={202}
          height={27}
        />
      </Link>
      <Nav>
        <Link href="/about-us" passHref>
          <a>OUR COMPANY</a>
        </Link>
        <Link href="/locations" passHref>
          <a>LOCATIONS</a>
        </Link>
        <Link href="/contact" passHref>
          <a>CONTACT</a>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}
