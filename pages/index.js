import Head from 'next/head';

import {
  homeObjOne,
  homeObjThree,
  homeObjFour,
  homeObjTwo,
  homeObjFive,
} from '../src/data/homeData';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { InfoSection, HowItWorks, HeroSection } from '../src/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Goloan - Get Quick Loans | Download Goloan App</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <NavBar />
      <HeroSection {...homeObjOne} button />
      <HowItWorks />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      <Footer />
    </>
  );
}
