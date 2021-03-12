import React from 'react';

import { colors } from '../../constants/theme';
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
  BadgeContainer,
  IOSBadge,
  AndroidBadge,
  Span,
} from './HeroElements';

function InfoSection({
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,

  img,
  alt,
  imgStart,
  start,
}) {
  const returnSpan = () => <Span>goloan.</Span>;

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>
                Are you a serving NYSC corper? or salary earner? Get access to
                immediate loans and power your monthly hustle with
                <span
                  style={{
                    color: colors.primary,
                    fontFamily: 'Product Sans Bold',
                  }}
                >
                  {' '}
                  goloan.
                </span>
              </Subtitle>

              <BadgeContainer>
                <IOSBadge src={require('../../images/appStoreBadge.svg')} />
                <AndroidBadge
                  src={require('../../images/playStoreBadge.svg')}
                />
              </BadgeContainer>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} width={843} height={930} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
    </>
  );
}

export default InfoSection;
