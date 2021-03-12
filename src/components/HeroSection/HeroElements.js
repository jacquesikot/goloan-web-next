import styled from 'styled-components';

import { colors } from '../../constants/theme';
import { Container } from '../../globalStyles';

export const InfoSec = styled.div`
  color: ${colors.white};
  padding: 20px 0px;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const InfoRow = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 414px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-bottom: 80px;

  @media screen and (max-width: 414px) {
    margin-bottom: 0px;
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
  font-family: 'Product Sans Bold';
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;

export const Heading = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 55px;
  font-family: 'Product Sans Black Regular';
  max-width: 70%;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? colors.light : colors.primary)};

  @media screen and (max-width: 960px) {
    font-size: 40px;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    max-width: 100%;
    justify-content: center;
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: 'Product Sans Regular';
  line-height: 24px;
  color: rgba(16, 10, 57, 0.65);
`;

export const BadgeContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 414px) {
    justify-content: space-between;
  }
`;
export const IOSBadge = styled.img`
  width: 30%;
  margin-right: 10px;

  @media screen and (max-width: 414px) {
    width: 48%;
    margin-right: 0px;
  }
`;

export const AndroidBadge = styled.img`
  width: 30%;

  @media screen and (max-width: 414px) {
    width: 48%;
  }
`;

export const Span = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: 'Product Sans Thin Regular';
  line-height: 24px;
  color: ${colors.pink};
`;
