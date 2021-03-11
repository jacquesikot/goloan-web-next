import styled from 'styled-components';

import { colors } from './constants/theme';

export const Container = styled.div`
  width: 100%;
`;

export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? colors.light : colors.pink)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${colors.primary};
  font-size: 15px;
  font-family: 'Product Sans Bold';
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  width: 130px;
  height: 50px;
  letter-spacing: 0.3px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const padding = '40px';
