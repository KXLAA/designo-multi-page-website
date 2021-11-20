import styled from "styled-components";

export const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 160px;
`;

export const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 350px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0rem) translateY(-0.8125rem);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdf3f0;
  color: var(--color-primary);
  padding: 32px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  transition: all 0.3s ease;

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
