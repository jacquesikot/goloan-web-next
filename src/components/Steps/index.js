import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingSubHeading,
  PricingPlanText,
  Img,
  BorderLine,
  DottedLine,
} from './StepsElements.js';

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>How it Works?</PricingHeading>
        <PricingSubHeading>
          It's a easy as these three steps...
        </PricingSubHeading>
        <DottedLine
          src={require('../../images/dottedLine.svg')}
          width="500px"
        />
        <PricingContainer>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardPlan>Register</PricingCardPlan>
              <BorderLine />
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks1.svg')} />
              </PricingCardIcon>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardPlan>Add Account</PricingCardPlan>
              <BorderLine />
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks2.svg')} />
              </PricingCardIcon>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardPlan>Get Loan</PricingCardPlan>
              <BorderLine />
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks3.svg')} />
              </PricingCardIcon>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
}
export default Pricing;
