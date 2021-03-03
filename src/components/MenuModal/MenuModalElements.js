import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

import { colors } from '../../constants/theme';

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Modal = styled(motion.div)`
  max-width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 60px;
  background: ${colors.primary};
  border-radius: 7px;
  text-align: center;
  z-index: 200;
  padding: 15px;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  display: flex;
`;

export const CloseIconWrap = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const LinkWrapper = styled.ul`
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;
  margin-top: -30px;
`;

export const LinkItem = styled.div`
  color: ${colors.white};
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  font-size: 24px;
  margin-top: 35px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.pink};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  border-radius: 7px;
  background: ${colors.pink};
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
  width: 200px;
`;
