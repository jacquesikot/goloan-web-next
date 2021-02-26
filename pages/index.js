import Head from 'next/head';

import {
  homeObjOne,
  homeObjThree,
  homeObjFour,
  homeObjTwo,
} from '../pages/Data';
import { InfoSection, Steps } from '../src/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Goloan - Get Loans Quickly</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <InfoSection {...homeObjOne} button />
      <Steps />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}
