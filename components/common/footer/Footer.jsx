import React from "react";
import styles from "../../../styles/utils.module.css";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import {
  FooterBg,
  FooterLayout,
  Nav,
  Logo,
  NavLinks,
  ContactContainer,
  Address,
  ContactDetail,
  SocialMediaIcons,
} from "./Footer.styled";

export default function Footer() {
  return (
    <>
      <FooterBg>
        <FooterLayout>
          <Nav>
            <Link href="/" passHref>
              <Logo
                src="/assets/shared/desktop/logo-light.png"
                alt="designo-logo"
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
