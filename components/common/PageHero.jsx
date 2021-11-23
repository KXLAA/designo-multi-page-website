import styled from "styled-components";
import { device } from "../common/MediaQueries";

export const HeroContainer = styled.section`
  padding: 64px 360px;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 160px;

  @media ${device.tablet} {
    padding: 64px 100px;
  }

  @media ${device.mobile} {
    padding: 112px 24px;
    border-radius: 0px;
    margin-bottom: 118px;
  }
`;

export const Text = styled.div`
  text-align: center;
  position: relative;
  color: var(--white);

  h1 {
    padding-bottom: 16px;
  }
`;
