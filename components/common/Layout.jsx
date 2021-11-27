import styled from "styled-components";
import { device } from "../common/MediaQueries";

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1159px;
  padding: 0px 24px 0px 24px;

  @media ${device.mobile} {
    padding: 0px;
  }
`;
