import styled from '@emotion/styled';

export const BoxMovie = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(3)} 0;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieImg = styled.img`
  max-height: 600px;
  max-width: 400px;
`;

export const Overwiew = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-weight: 700;
`;

export const Genres = Overwiew.withComponent('span');

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing(4)} 0;
  border: 1px solid ${props => props.theme.colors.pink};
  border-right: none;
  border-left: none;
`;

export const LinkTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing(3)};
`;
