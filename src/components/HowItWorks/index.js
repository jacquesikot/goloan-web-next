import React from 'react';
import HomeCard from '../HomeCard';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  DottedLine,
  CardContainer,
  Span,
  HeadingContainer,
} from './StepsElements.js';
import { data } from './data';

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <HeadingContainer>
          <PricingHeading>
            HOW IT WORKS ? <Span> It's As Easy As These Three Steps ...</Span>
          </PricingHeading>
        </HeadingContainer>
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
