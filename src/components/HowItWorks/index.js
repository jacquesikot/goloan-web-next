import React from 'react';
import HomeCard from '../HomeCard';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingSubHeading,
  DottedLine,
  CardContainer,
} from './StepsElements.js';
import { data } from './data';

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
        <CardContainer>
          {data.map(({ heading, img, width, marginLeft }) => (
            <HomeCard
              heading={heading}
              img={img}
              width={width}
              marginLeft={marginLeft}
            />
          ))}
        </CardContainer>
      </PricingWrapper>
    </PricingSection>
  );
}
export default Pricing;
