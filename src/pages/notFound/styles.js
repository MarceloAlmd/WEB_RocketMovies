import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BROWN_100};
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  > svg {
    font-size: 20rem;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;
