import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY_300};

  width: 30rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 9px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_500};
    font-weight: 500;
  }

  > h4 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 300;
  }

  .contentButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 1rem;

    .buttonConfirm {
      border: 0;
      padding: 8px 26px;
      border-radius: 4px;
      background: ${({ theme }) => theme.COLORS.GREEN};

      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    .buttonCancel {
      border: 0;
      padding: 8px 26px;
      border-radius: 4px;
      background: ${({ theme }) => theme.COLORS.RED};

      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
