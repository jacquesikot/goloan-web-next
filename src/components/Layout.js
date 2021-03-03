<<<<<<< HEAD
import React from 'react';

import Navbar from './NavBar';
import Footer from './Footer';
import { Container } from '../globalStyles';

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
=======
import Footer from './Footer';
import React from 'react';
import Navbar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
  );
}
