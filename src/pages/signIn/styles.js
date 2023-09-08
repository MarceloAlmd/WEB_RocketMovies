import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 8rem;

  display: flex;
  justify-content: center;

  flex-direction: column;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin: 48px 0 48px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK_500};
    text-decoration: none;
    font-weight: 300;

    text-align: center;

    margin-top: 3rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url("/cineBackgroundImg.svg") no-repeat center center;

  background-size: cover;
`;
