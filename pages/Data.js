import React from 'react';

const Data = () => {
  return <div></div>;
};

export default Data;

export const homeObjOne = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Quick Loans',
  headline: 'Get up to N20k in monthly loans under 5mins',
  description:
    'Are you a serving NYSC corper? Get access to immediate loans and power your monthly hustle with goloan',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../src/images/svg-1.svg'),
  alt: 'Credit Card',
  start: '',
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Points & Rewards',
  headline: 'Earn meaningful points for all your transactions with us',
  description:
    'For every loan, payment or purchase you make with us, you get points that allow you do more',
  buttonLabel: 'Learn More',
  imgStart: 'start',
  img: require('../src/images/svg-2.svg'),
  alt: 'Vault',
  start: '',
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Instant Loans',
  headline: 'Access to credit now made simple. Just goloan',
  description:
    'No forms, guarantors, processing fees or tidious sign up process',
  buttonLabel: '',
  imgStart: 'start',
  img: require('../src/images/svg-3.svg'),
  alt: 'instant-loan',
  start: 'true',
};

export const homeObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Fast Payments',
  headline: 'Enjoy hassle free payments at no cost',
  description:
    'You can pay your bills and recharge airtime straight from our app - at the lowest possible cost',
  buttonLabel: 'Sign Up Now',
  imgStart: '',
  img: require('../src/images/svg-3.svg'),
  alt: 'Vault',
  start: 'true',
};
