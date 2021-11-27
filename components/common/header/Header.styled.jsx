import styled from "styled-components";
import { device } from "../MediaQueries";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const HeaderContainer = styled.header`
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    padding: 32px 24px;
  }
`;

export const MobileMenuBtn = styled(GiHamburgerMenu)`
  transition: 0.5s ease;
  display: none;
  font-size: 27px;
  cursor: pointer;
  @media ${device.mobile} {
    display: block;
  }
`;

export const CloseMenuBtn = styled(IoCloseSharp)`
  transition: 0.5s ease;
  display: none;
  font-size: 27px;
  cursor: pointer;
  @media ${device.mobile} {
    display: block;
  }
`;

export const MobileNav = styled.div`
  transition: 0.5s ease;
  position: absolute;
  z-index: 3;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  padding: 54px 24px;
  padding-bottom: 30px;
  background-color: #1d1c1e;
  color: #ffffff;
  width: 100%;
  left: 0;
  top: 90px;

  a {
    padding-bottom: 24px;
  }
`;

export const BackgroundBlur = styled.div`
  transition: 0.5s ease;
  z-index: 2;
  position: absolute;
  background-color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 90px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 42px;

  @media ${device.mobile} {
    display: none;
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
