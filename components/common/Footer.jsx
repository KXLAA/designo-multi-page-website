import React from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "../../styles/utils.module.css";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const FooterBg = styled.footer`
  background-color: var(--black);
  padding-top: 10rem;
  padding-bottom: 4.5rem;
  display: flex;
  flex-direction: column;
`;

const FooterLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1159px;
  padding: 0px 24px 0px 24px;
`;

const Nav = styled.nav`
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
`;

const NavLinks = styled.div`
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

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  justify-content: space-between;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.1);
  p {
    color: var(--white);
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.1);

  p {
    font-weight: bold;
    color: var(--white);
    opacity: 0.5;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Footer() {
  return (
    <>
      <FooterBg>
        <FooterLayout>
          <Nav>
            <Link href="/" passHref>
              <Image
                className={styles.cursor}
                src="/assets/shared/desktop/logo-light.png"
                alt="designo-logo"
                width={202}
                height={27}
              />
            </Link>
            <NavLinks>
              <Link href="/about-us" passHref>
                <a>OUR COMPANY</a>
              </Link>
              <Link href="/locations" passHref>
                <a>LOCATIONS</a>
              </Link>
              <Link href="/contact" passHref>
                <a>CONTACT</a>
              </Link>
            </NavLinks>
          </Nav>
          <ContactContainer>
            <Address>
              <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </Address>
            <ContactDetail>
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </ContactDetail>
            <SocialMediaIcons>
              <FaFacebookSquare className={styles.socialMediaIcon} />
              <FaYoutube className={styles.socialMediaIcon} />
              <FaTwitter className={styles.socialMediaIcon} />
              <FaPinterest className={styles.socialMediaIcon} />
              <FaInstagram className={styles.socialMediaIcon} />
            </SocialMediaIcons>
          </ContactContainer>
        </FooterLayout>
      </FooterBg>
    </>
  );
}
