import Head from 'next/head';

import Layout from '../src/components/Layout';
import {
  homeObjOne,
  homeObjThree,
  homeObjFour,
  homeObjTwo,
} from '../src/data/homeData';
<<<<<<< HEAD
import { InfoSection, HowItWorks, HeroSection } from '../src/components';
=======
import { InfoSection, Steps, HeroSection } from '../src/components';
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Goloan - Get Loans Quickly</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <HeroSection {...homeObjOne} button />
<<<<<<< HEAD
      <HowItWorks />
=======
      <Steps />
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
    </Layout>
  );
}
