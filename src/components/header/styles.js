import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7.25rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;

  padding: 0 7.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  grid-area: header;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 125px;

    strong {
      font-size: 0.8rem;
    }

    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1rem;

      align-self: flex-end;
    }
  }
  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`;
