import styled from 'styled-components';

import { colors } from '../../src/constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background: ${colors.white};
`;

export const Img = styled.img`
  width: 170px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  width: 30%;
  height: 70%;
  background: ${colors.light};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeaderText = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;
