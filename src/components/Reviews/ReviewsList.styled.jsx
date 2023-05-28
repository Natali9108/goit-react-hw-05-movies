import styled from '@emotion/styled';

export const ReviewsBox = styled.div`
  padding: ${props => props.theme.spacing(4)} 0;
`;

export const ListReviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Author = styled.h3`
  margin-bottom: ${props => props.theme.spacing(2)};
`;
