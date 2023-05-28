import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  gap: ${props => props.theme.spacing(1)};
  align-items: center;
`;
