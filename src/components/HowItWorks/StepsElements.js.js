import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const PricingSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 100px;
  padding-bottom: 100px;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const PricingHeading = styled.h1`
  color: ${colors.primary};
  font-size: 35px;
  font-family: 'Product Sans Bold';
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 30px;
    font-size: 29px;
  }
`;

export const Span = styled.span`
  font-family: 'Product Sans Thin Regular';
  font-weight: 100;
  font-size: 35px;
  color: ${colors.primary};

  @media screen and (max-width: 768px) {
    font-size: 29px;
  }
`;

export const DottedLine = styled.img`
  width: 34%;
  position: absolute;
  top: 1060px;
  left: 480px;

  @media screen and (max-width: 414px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    left: 200px;
    top: 800px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding: 0 200px;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    margin-top: 20px;
    padding: 0 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;
