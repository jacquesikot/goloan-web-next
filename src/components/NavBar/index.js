import React, { useState, useEffect } from 'react';
import { TiTimes } from 'react-icons/ti';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import Scroll from 'react-scroll';

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
  Space,
  Space2,
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

  return (
    <>
      <IconContext.Provider value={{ color: colors.primary }}>
        <Nav>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <Img src={require('../../images/goloanLogo.svg')} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <TiTimes /> : <HiMenuAlt3 />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <Space2 />
              <NavItem>
                <NavLinks href="#services" onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <Space2 />
              <NavItem>
                <NavLinks href="/about" onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <Space />
              <NavItemBtn>
                {button ? (
                  <NavBtnLink href="/login">
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink href="/login">
                    <Button onClick={closeMobileMenu} primary>
                      Sign Up
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
