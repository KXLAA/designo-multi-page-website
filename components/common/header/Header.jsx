import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/utils.module.css";
import {
  HeaderContainer,
  CloseMenuBtn,
  MobileMenuBtn,
  Nav,
  MobileNav,
  BackgroundBlur,
} from "./Header.styled";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

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

      {openNav ? (
        <CloseMenuBtn onClick={() => setOpenNav(false)} />
      ) : (
        <MobileMenuBtn onClick={() => setOpenNav(true)} />
      )}

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

      {openNav && (
        <>
          <MobileNav>
            <Link href="/about-us" passHref>
              <a>OUR COMPANY</a>
            </Link>
            <Link href="/locations" passHref>
              <a>LOCATIONS</a>
            </Link>
            <Link href="/contact" passHref>
              <a>CONTACT</a>
            </Link>
          </MobileNav>
          <BackgroundBlur onClick={() => setOpenNav(false)} />
        </>
      )}
    </HeaderContainer>
  );
}
