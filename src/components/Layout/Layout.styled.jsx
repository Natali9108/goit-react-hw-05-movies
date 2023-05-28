import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
`;

export const Header = styled.header`
  display: flex;
  padding: ${props => props.theme.spacing(5)};
  box-shadow: ${props => props.theme.shadows.regular};
  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
  gap: ${props => props.theme.spacing(4)};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  :hover,
  :focus {
    text-decoration: revert;
  }

  &.active {
    color: ${props => props.theme.colors.pink};
  }
`;
