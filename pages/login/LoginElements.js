import styled from 'styled-components';

import { colors } from '../../src/constants/theme';

import React from 'react';

function Test() {
  return <div></div>;
}

export default Test;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 250px;
  background: ${colors.primaryDark};
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  width: 170px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  width: 35%;
  height: 80%;
  background: ${colors.white};
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeaderText = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${colors.primary};
  letter-spacing: 1px;
`;
