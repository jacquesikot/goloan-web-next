import React from 'react';

import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <SocialLogo href="/">
        <SocialIcon src={require('../../images/goloanLogoWhite.svg')} />
      </SocialLogo>
      <FooterSubscription>
        <FooterSubHeading>
          Get early access to our services once we launch
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Enter Your Email" />
          <Button>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Made with ❤️ by goloan</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
