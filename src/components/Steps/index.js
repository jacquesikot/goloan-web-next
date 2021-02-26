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
} from './StepsElements.js';

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>How it Works</PricingHeading>
        <PricingSubHeading>
          It's a simple as these three steps...
        </PricingSubHeading>
        <PricingContainer>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks1.svg')} />
              </PricingCardIcon>
              <PricingCardPlan>Register</PricingCardPlan>
              <PricingPlanText>
                Sign up with you email and get started
              </PricingPlanText>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks2.svg')} />
              </PricingCardIcon>
              <PricingCardPlan>Add Account</PricingCardPlan>
              <PricingPlanText>
                Add your payment card & bank statement
              </PricingPlanText>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <Img src={require('../../images/howItWorks3.svg')} />
              </PricingCardIcon>
              <PricingCardPlan>Get Loan</PricingCardPlan>
              <PricingPlanText>
                Get your loans processed immediately
              </PricingPlanText>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
}
export default Pricing;
