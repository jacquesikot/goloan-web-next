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
  );
}
