import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 7.25rem 7.25rem auto;
  grid-template-areas: "header" "myMovies" "content";
`;

export const MyMovies = styled.div`
  grid-area: myMovies;

  width: 100%;
  margin: 0 auto;

  padding: 0 21rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .content-button {
    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;
    max-width: 12rem;
    height: 48px;
    border-radius: 10px;

    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    button {
      background-color: transparent;
      border: none;

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        @media (max-width: 700px) {
          font-size: 0.75rem;
          flex: 1;
        }
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    @media (max-width: 700px) {
      gap: 0;
      max-width: 8rem;
      padding: 0.5rem;
    }
  }

  > h1 {
    font-size: 2rem;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 855px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  grid-area: content;
  padding: 0 1rem;

  overflow-y: auto;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    position: relative;
    left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  > main {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;
