import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 10px;
  margin-bottom: 0.6rem;

  display: flex;
  align-items: center;

  > input {
    height: 3.5rem;
    width: 100%;

    background: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 0 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;
