import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: "header" "content";
`;

export const Content = styled.div`
  grid-area: content;

  width: 100%;
  max-width: 1600px;
  max-height: 45rem;

  overflow-y: auto;

  margin: 2rem auto;

  padding: 0 4rem;

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

  @media (max-width: 776px) {
    padding: 0 1rem;
  }

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      width: 7rem;
      height: 2rem;
    }
  }
`;

export const ContentTitleAndRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  margin-top: 2.8rem;

  > h1 {
    font-size: 2.25rem;
    margin-top: -0.5rem;

    @media (max-width: 776px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContentProfileAndCreatedAt = styled.div`
  margin-top: 1.5rem;

  display: flex;

  align-items: center;
  gap: 8px;

  > img {
    width: 1.2rem;
    height: 1.2rem;

    border-radius: 50%;

    outline: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > span:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_500};
      font-size: 1rem;

      margin-left: 8px;
    }
  }
`;

export const ContentTags = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 8px;

  margin: 2rem 0;
`;

export const ContentDescription = styled.div`
  line-height: 1.4rem;
  text-align: justify;
`;
