import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  min-height: 12rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.BROWN_100};
  border: none;

  border-radius: 16px;

  &:last-child {
    margin-bottom: 1.4rem;
  }

  > h2 {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
  }

  > span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 1200px;

    text-align: justify;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1rem;
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  &:hover {
    filter: brightness(1);
  }
`;
