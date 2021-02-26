import React from 'react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { colors } from '../../constants/theme';

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Img,
} from './NavBarElements';

const NavBar = ({ toggle, isOpen }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <Img src={require('../../images/goloanLogo.svg')} />

          <MobileIcon onClick={toggle}>
            <FaBars color={colors.veryDark} />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">How it works</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </motion.div>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
