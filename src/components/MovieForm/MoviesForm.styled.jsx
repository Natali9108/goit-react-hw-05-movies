import styled from '@emotion/styled';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  margin-left: ${props => props.theme.spacing(4)};
  width: 350px;
  font-size: ${props => props.theme.fontSizes.medium};
  border: 2px solid ${props => props.theme.colors.pink};
  border-radius: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.white};
`;

export const Input = styled.input`
  padding: ${props => props.theme.spacing(2)};
  width: 90%;
  border: none;
  border-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${props => props.theme.spacing(2)};
  height: 100%;
  width: 40px;
  border-radius: 6px;
  text-align: center;
  background-color: #f5f2f1;
  cursor: pointer;

  transition-property: transform, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.02);

    color: ${props => props.theme.colors.blue};
  }
`;
