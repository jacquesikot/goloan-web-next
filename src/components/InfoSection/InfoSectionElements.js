import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const InfoSec = styled.div`
  color: ${colors.white};
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? colors.white : colors.veryDark)};

  @media screen and (max-width: 960px) {
    padding: 0 0;
  }
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
  max-width: 540px;
  margin-top: 80px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
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
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? colors.light : colors.primary)};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? colors.grey : colors.primary};
`;

export const FirstText = styled.p`
  width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: ${colors.dark};
  background: ${colors.white};
  z-index: 100;
  position: absolute;
  border-radius: 10px;
  font-family: 'Product Sans Black Regular';
  box-shadow: 0 4px 8px 0 rgba(169, 179, 193, 0.2),
    0 6px 20px 0 rgba(169, 179, 193, 0.19);
`;
