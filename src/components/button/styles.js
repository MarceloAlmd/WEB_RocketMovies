import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;

  background: ${({ theme }) => theme.COLORS.PINK_500};
  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: bold;

  font-size: 1rem;

  margin-top: ${({ marginTop }) => marginTop};
`;
