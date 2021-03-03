import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
<<<<<<< HEAD
import Link from 'next/link';
=======
// import Link from 'next/link';
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8

import { colors } from '../../constants/theme';

export const FooterContainer = styled.div`
<<<<<<< HEAD
  background-color: ${colors.primaryDark};
  padding: 4rem 0 2rem 0;
  margin-top: 100px;
=======
  background-color: ${colors.veryDark};
  padding: 4rem 0 2rem 0;
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-top: -10px;
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
<<<<<<< HEAD
  border-radius: 7px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  border: 1px solid #fff;

  &::placeholder {
    color: ${colors.primary};
=======
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

<<<<<<< HEAD
export const SocialLogo = styled(Link)`
=======
export const SocialLogo = styled.div`
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
  margin-right: 10px;
  width: 200px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
