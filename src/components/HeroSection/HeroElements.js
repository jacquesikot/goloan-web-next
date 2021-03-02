import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const InfoSec = styled.div`
  color: #fff;
  padding: 70px 0;
  background: ${({ lightBg }) => (lightBg ? colors.white : colors.veryDark)};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 35px -15px 35px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 580px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  margin-bottom: 30px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? colors.grey : colors.pink)};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.4px;
  color: ${({ lightText }) => (lightText ? colors.light : colors.primary)};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? colors.grey : colors.primary};
`;
