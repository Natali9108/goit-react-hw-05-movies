import styled from '@emotion/styled';

export const ListCast = styled.ul`
  padding: ${props => props.theme.spacing(4)} 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 32px) / 3);
`;

export const CastImg = styled.img``;

export const Wrapper = styled.div`
  padding: 8px;
  width: 300px;
  border: 1px solid #dfcac6;
`;

export const OriginalName = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
`;

export const Character = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
`;

export const CharacterText = styled.p`
  display: inline;
  font-size: ${props => props.theme.fontSizes.small};
`;
