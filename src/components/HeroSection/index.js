import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
} from './HeroElements';

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
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
