import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.primary};
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: ${colors.white};
  font-size: 48px;
`;

export const PricingSubHeading = styled.h3`
  color: ${colors.grey};
  font-size: 24px;
  margin-top: -20px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: ${colors.white};
  width: 280px;
  height: 250px;
  text-decoration: none;
  border-radius: 7px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 100%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 24px;
  align-items: center;
  color: ${colors.dark};
  text-align: center;
`;

export const PricingCardIcon = styled.div`
  margin: 10px 0;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 70%;
  vertical-align: middle;
  display: inline-block;

  @media screen and (max-width: 960px) {
    max-width: 55%;
  }
`;

export const PricingCardPlan = styled.h3`
  font-size: 18px;
  margin-top: -3px;
`;
export const PricingPlanText = styled.p`
  font-size: 14px;
  color: ${colors.grey};
  margin-top: -10px;
`;
