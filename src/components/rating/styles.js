import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const Container = styled.div``;

export const Rating = styled(AiFillStar)`
  color: ${({ theme }) => theme.COLORS.PINK_500};
`;

export const EmptyStar = styled(AiOutlineStar)`
  color: ${({ theme }) => theme.COLORS.PINK_500};
`;
