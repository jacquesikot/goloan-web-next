import Head from 'next/head';

import Layout from '../src/components/Layout';
import {
  homeObjOne,
  homeObjThree,
  homeObjFour,
  homeObjTwo,
} from '../src/data/homeData';
import { InfoSection, HowItWorks, HeroSection } from '../src/components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Goloan - Get Loans Quickly</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <HeroSection {...homeObjOne} button />
      <HowItWorks />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
    </Layout>
  );
}
