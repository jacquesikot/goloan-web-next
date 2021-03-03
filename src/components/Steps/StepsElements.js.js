import styled from 'styled-components';

import { colors } from '../../constants/theme';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.white};
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

export const PricingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  width: 900px;

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
  width: 220px;
  height: 220px;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
  align-items: right;
  color: ${colors.primary};
  text-align: left;

  @media screen and (max-width: 960px) {
    height: 210px;
  }
`;

export const PricingCardIcon = styled.div`
  margin-top: 10px;
`;

export const Img = styled.img`
  width: ${({ width }) => (width ? width : '100px')};

  @media screen and (max-width: 960px) {
    max-width: 55%;
  }
`;

export const PricingCardPlan = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
`;
export const PricingPlanText = styled.p`
  font-size: 18px;
  color: ${colors.grey};
`;

export const DottedLine = styled.img`
  width: 30%;
  position: absolute;
  top: 1020px;
  left: 480px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const BorderLine = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${colors.primary};
  margin-bottom: 5px;
`;
