import styled from "styled-components";

export const Button = styled.button`
  margin-top: 40px;
  background: var(--white);
  color: var(--dark-gray);
  border-radius: 8px;
  padding: 18px 24px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  border: none;
  outline: none;

  &:hover {
    background: var(--color-secondary);
    color: var(--white);
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  a {
    margin: 0 auto;
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
  }
`;
