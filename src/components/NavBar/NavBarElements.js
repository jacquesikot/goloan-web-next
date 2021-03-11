import styled from 'styled-components';
import Link from 'next/link';

import { Container } from '../../globalStyles';
import { colors } from '../../constants/theme';

export const Nav = styled.nav`
  background: ${colors.white};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 130px;

  @media screen and (max-width: 960px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 414px) {
    padding: 0 50px;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding-top: 20px;
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding-top: 10px;

  @media screen and (max-width: 960px) {
    padding-bottom: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-bottom: 60px;
    margin-right: 50px;
  }

  @media screen and (max-width: 375px) {
    margin-right: -100px;
  }

  @media screen and (min-width: 400px) {
    margin-right: -80px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 120px;
  }
`;

export const NavLinks = styled.div`
  color: ${colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 0.4px;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: ${colors.white};
  }

  &:hover {
    color: ${colors.pink};
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const Img = styled.img`
  width: 80px;
`;

export const Space = styled.div`
  width: 40px;
`;

export const Space2 = styled.div`
  width: 25px;
`;
