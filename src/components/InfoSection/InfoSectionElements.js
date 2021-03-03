import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const InfoSec = styled.div`
<<<<<<< HEAD
  color: ${colors.white};
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? colors.white : colors.veryDark)};

  @media screen and (max-width: 960px) {
    padding: 0 0;
  }
=======
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? colors.white : colors.veryDark)};
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
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
<<<<<<< HEAD
  margin-top: 80px;
=======
  padding-top: 0;
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
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
<<<<<<< HEAD
  color: ${({ lightTopLine }) => (lightTopLine ? colors.grey : colors.pink)};
=======
  color: ${({ lightTopLine }) => (lightTopLine ? colors.grey : colors.primary)};
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
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
<<<<<<< HEAD
  color: ${({ lightText }) => (lightText ? colors.light : colors.primary)};
=======
  color: ${({ lightText }) => (lightText ? colors.light : colors.dark)};
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
<<<<<<< HEAD
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? colors.grey : colors.primary};
=======
  color: ${({ lightTextDesc }) => (lightTextDesc ? colors.grey : colors.dark)};
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
`;
