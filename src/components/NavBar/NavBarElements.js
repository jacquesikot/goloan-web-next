import styled from 'styled-components';
import { Link } from 'react-scroll';

import { colors } from '../../constants/theme';

export const Nav = styled.nav`
  background: ${colors.white};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0px;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    padding: 0 80px;
  }
`;

export const Img = styled.img`
  margin-top: 25px;
  border: 0;
  max-width: 20%;
  max-height: 50%;
  vertical-align: middle;
  display: inline-block;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 450px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  color: ${colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 400;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${colors.primary};
  }

  &:hover {
    border-bottom: 3px solid ${colors.primary};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 7px;
  background: ${colors.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${colors.white};
  font-size: 17px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.secondary};
    color: ${colors.white};
  }
`;
