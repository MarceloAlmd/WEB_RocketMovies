import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem auto;
  grid-template-areas: "header" "form";

  > header {
    grid-area: header;
    background: ${({ theme }) => theme.COLORS.BROWN_100};
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      > a {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-rows: 7rem auto;
  }
`;

export const Form = styled.form`
  grid-area: form;
  width: 100%;
  max-width: 23.25rem;
  margin: 0 auto;

  padding: 1rem;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }

  > button {
    margin-top: 1.5rem;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: -100px auto 4rem;

  > img {
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 7px;
    bottom: 7px;

    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    height: 3rem;
    width: 3rem;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    input {
      display: none;
    }
  }
`;
