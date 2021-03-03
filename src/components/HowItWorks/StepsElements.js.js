import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const PricingSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: ${colors.primary};
  font-size: 48px;
  margin-bottom: 5px;
  font-weight: 600;
  letter-spacing: 3px;
`;

export const PricingSubHeading = styled.h3`
  color: ${colors.pink};
  font-size: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const DottedLine = styled.img`
  width: 34%;
  position: absolute;
  top: 1010px;
  left: 480px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding: 0 200px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;
