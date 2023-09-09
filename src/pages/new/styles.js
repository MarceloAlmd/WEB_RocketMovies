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
  height: 100%;
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
`;

export const ContentTitleAndArrow = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2rem;

  margin-bottom: 2.5rem;

  > h1 {
    font-size: 2.25rem;
    margin-top: -0.5rem;

    @media (max-width: 776px) {
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  .content-inputs {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  > textarea {
    resize: none;
    width: 100%;
    margin-top: 2rem;

    border-radius: 10px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 1rem;
    border: none;

    outline: none;

    height: 12rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

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
      height: 6rem;
    }
  }

  > footer {
    margin-top: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2.5rem;

    .button-delete {
      width: 100%;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK_500};

      border: 0;
      padding: 1rem 0;

      border-radius: 10px;

      font-size: 1rem;
      font-weight: bold;
    }

    .button-save {
      width: 100%;
      background: ${({ theme }) => theme.COLORS.PINK_500};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      border: 0;
      padding: 1rem 0;

      border-radius: 10px;

      font-size: 1rem;
      font-weight: bold;
    }
  }
`;

export const Markers = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  > h2 {
    font-size: 1.25rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    padding: 1rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    display: flex;
    align-items: center;

    gap: 2rem;
    flex-wrap: wrap;
  }
`;
