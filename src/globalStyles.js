import styled from 'styled-components';

import { colors } from './constants/theme';

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 7px;
  background: ${({ primary }) => (primary ? colors.primary : colors.secondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) =>
      primary ? colors.secondary : colors.primary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
