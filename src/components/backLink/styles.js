import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK_500};
  text-decoration: none;
  gap: 0.5rem;
  margin-left: ${({ marginLeft }) => marginLeft || `9rem`};

  @media (max-width: 760px) {
    margin-left: 1rem;
  }
`;
