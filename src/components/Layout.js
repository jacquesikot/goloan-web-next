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
  );
}
