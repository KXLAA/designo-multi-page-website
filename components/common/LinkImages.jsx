import styled from "styled-components";

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  display: block;
  transition: 0.5s ease;
`;

export const DesktopImage = styled(Image)`
  @media ${device.tablet} {
    display: none;
  }
`;

export const TabletImage = styled(Image)`
  display: none;
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const MobileImage = styled(Image)`
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;
