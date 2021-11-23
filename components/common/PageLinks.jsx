import styled from "styled-components";
import { device } from "../common/MediaQueries";

export const MainContainer = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 60px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
    transform: translateX(0rem) translateY(-0.7125rem);
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(231, 129, 107, 0.7);
  border-radius: 16px;

  &:hover {
    opacity: 1;
  }
`;
export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  display: block;
  transition: 0.5s ease;
`;

export const Text = styled.div`
  width: 100%;
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--white);

  h1 {
    padding-bottom: 16px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 5px;
  }
`;

export const ViewProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
