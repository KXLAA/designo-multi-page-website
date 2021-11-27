import styled from "styled-components";
import { Button } from "../Button";
import { device } from "../../common/MediaQueries";

export const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    padding-bottom: 24px;
  }
`;
export const Text = styled.div`
  color: var(--dark-gray);
  text-align: center;
  h3 {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const OrangeButton = styled(Button)`
  background: var(--color-primary);
  color: var(--white);
  margin: 0px;
`;
