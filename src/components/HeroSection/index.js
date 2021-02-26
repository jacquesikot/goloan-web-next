import React, { useState } from 'react';

// import video from '../../videos/video.mp4';
import { Button } from '..';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroH1>Corper Loans Made Easy</HeroH1>
          <HeroP>
            Are you a serving NYSC Corper? Get up to N20k in monthly Loans in
            under 5 mins!
          </HeroP>
          <HeroBtnWrapper>
            <Button
              primary={true}
              dark={true}
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
