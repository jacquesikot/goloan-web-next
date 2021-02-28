import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Button } from '../../globalStyles';
import { colors } from '../../constants/theme';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  Img,
} from './NavBarElements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: colors.primary }}>
        <Nav>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <Img src={require('../../images/goloanLogo.svg')} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/services" onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/about" onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink href="/sign-up">
                    <Button primary>Login</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink href="/sign-up">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
