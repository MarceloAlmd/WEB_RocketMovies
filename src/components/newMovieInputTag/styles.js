import styled from "styled-components";

export const Container = styled.div`
  width: ${({ isNew }) => (isNew ? "13.5rem" : "12rem")};
  padding: 1rem;
  border-radius: 0.6rem;

  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  > input {
    width: 100%;
    background: none;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1rem;
  }

  > button {
    background: none;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.PINK_500};
    }
  }
`;
