import styled from 'styled-components';

import { colors } from './constants/theme';

export const Container = styled.div`
<<<<<<< HEAD
  width: 100%;
=======
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
`;

export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 7px;
<<<<<<< HEAD
  background: ${({ primary }) => (primary ? colors.primary : colors.pink)};
=======
  background: ${({ primary }) => (primary ? colors.primary : colors.secondary)};
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
<<<<<<< HEAD

export const padding = '40px';
=======
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
