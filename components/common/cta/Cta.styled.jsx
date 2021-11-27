import styled from "styled-components";
import { device } from "../MediaQueries";

export const CtaContainer = styled.section`
  padding: 72px 95px;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
