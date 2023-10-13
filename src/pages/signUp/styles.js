import styled from "styled-components";
import backgroundImg from "../../assets/cineBackgroundImg.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  align-items: stretch;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 3rem;

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

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 776px) {
    padding: 0 1rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;

  background-size: cover;

  @media (max-width: 776px) {
    display: none;
  }
`;
