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
  topLine: 'Need A Quick Loan?',
  headline: 'Get up to N20,000 in loans instantly',
  description:
    'Are you a salary earner? Get access to immediate loans and power your monthly hustle with goloan',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../images/svg-1.svg'),
  alt: 'goloan',
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
  img: require('../images/svg-4.svg'),
  alt: 'points & rewards',
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
  img: require('../images/svg-3.svg'),
  alt: 'instant loan',
  start: 'true',
};

export const homeObjFour = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Fast Payments',
  headline: 'Enjoy hassle free payments from our mobile apps at no cost',
  description:
    'You can pay your bills and recharge airtime straight from our app - at the lowest possible cost',
  buttonLabel: 'Sign Up Now',
  imgStart: '',
  img: require('../images/svg-2.svg'),
  alt: 'fast payment',
  start: 'true',
};
