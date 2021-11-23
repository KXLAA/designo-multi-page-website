import styled from "styled-components";
import { device } from "../common/MediaQueries";

export const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 160px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 118px;
  }
`;

export const FeaturesCard = styled.div`
  display: flex;
  background: #fdf3f0;
  color: var(--color-primary);
  flex-direction: column;
  border-radius: 15px;
  max-width: 350px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column;
    max-width: 100%;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--white);
    transform: translateX(0rem) translateY(-0.8125rem);

    p {
      color: var(--white);
    }
  }

  h3 {
    text-align: center;
    padding-bottom: 16px;
  }

  p {
    text-align: center;
    color: #333136;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
