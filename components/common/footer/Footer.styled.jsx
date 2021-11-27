import styled from "styled-components";
import { device } from "../MediaQueries";

export const FooterBg = styled.footer`
  background-color: var(--black);
  padding-top: 10rem;
  padding-bottom: 4.5rem;
  display: flex;
  flex-direction: column;
`;

export const FooterLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1159px;
  padding: 0px 24px 0px 24px;
`;

export const Nav = styled.nav`
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px rgba(255, 255, 255, 0.1) solid;

  @media ${device.mobile} {
    flex-direction: column;
    border: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 42px;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    padding-top: 32px;
    border-top: 1px rgba(255, 255, 255, 0.1) solid;
  }

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

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.1);

  @media ${device.mobile} {
    padding-bottom: 32px;
    text-align: center;
  }

  p {
    color: var(--white);
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
export const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.1);

  @media ${device.mobile} {
    padding-bottom: 32px;
    text-align: center;
  }

  p {
    font-weight: bold;
    color: var(--white);
    opacity: 0.5;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 202px;
  cursor: pointer;

  @media ${device.mobile} {
    margin: 0 auto;
    padding-bottom: 32px;
    width: 70%;
  }
`;
