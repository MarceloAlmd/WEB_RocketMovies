import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 0.313rem 1rem;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
