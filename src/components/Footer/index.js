import React from 'react';
<<<<<<< HEAD

import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
=======
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
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
<<<<<<< HEAD
      <SocialLogo href="/">
        <SocialIcon src={require('../../images/goloanLogoWhite.svg')} />
      </SocialLogo>
=======
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
      <FooterSubscription>
        <FooterSubHeading>
          Get early access to our service once we launch
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
<<<<<<< HEAD
          <FormInput name="email" type="email" placeholder="Enter Your Email" />
          <Button>Subscribe</Button>
=======
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
        </Form>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
<<<<<<< HEAD
=======
          <SocialLogo to="/">
            <SocialIcon src={require('../../images/goloanLogo.svg')} />
          </SocialLogo>
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
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
