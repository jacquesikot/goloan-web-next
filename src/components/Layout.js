import Footer from './Footer';
import React, { useState } from 'react';
import Navbar from './NavBar';
import MenuModal from './MenuModal';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MenuModal showModal={isOpen} setShowModal={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  );
}
