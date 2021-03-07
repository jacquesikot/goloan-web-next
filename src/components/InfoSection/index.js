import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

import { Container, Button, BtnWrapper } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  FirstText,
} from './InfoSectionElements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  button,
}) {
  const controls = useAnimation();

  const variants = {
    visible: {
      y: 5,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  const variants2 = {
    visible: {
      x: 0,
      type: 'spring',
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
    hidden: {
      x: 1300,
    },
  };

  const onScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    // console.log(scrollPosition);
    if (scrollPosition > 3721) {
      controls.start('visible');
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollRef = useRef(null);

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {button ? (
                  <Link href="/sign-up">
                    <BtnWrapper>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{
                          scale: 0.8,
                          borderRadius: '100%',
                        }}
                      >
                        <Button big fontBig primary={primary}>
                          {buttonLabel}
                        </Button>
                      </motion.div>
                    </BtnWrapper>
                  </Link>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <motion.div
                ref={scrollRef}
                initial="hidden"
                animate={controls}
                variants={variants2}
              >
                <FirstText>*124#</FirstText>
              </motion.div>
              <motion.div animate="visible" variants={variants}>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </motion.div>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
