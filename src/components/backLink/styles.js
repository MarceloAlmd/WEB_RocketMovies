import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK_500};
  text-decoration: none;
  gap: 0.5rem;
  margin-left: ${({ marginLeft }) => marginLeft || `9rem`};

  @media (max-width: 760px) {
    margin-left: ${({ marginLeft }) => marginLeft || `9rem`};
  }
`;
