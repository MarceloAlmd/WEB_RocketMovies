import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7.25rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 1rem;
  gap: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  grid-area: header;

  > div:nth-child(2) {
    width: 100%;
    max-width: 650px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_500};
    font-size: 1.5rem;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
    max-width: 125px;

    a {
      text-decoration: none;
      font-size: 0.8rem;
        text-align: right;
      strong {
        
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1rem;

      align-self: flex-end;
    }
  }
  > a {
    &:hover {
      filter: brightness(1);
    }

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;

      @media (max-width: 600px) {
        width: 54px;
        height: 54px;
      }
    }
  }
`;
