import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { colors } from '../../constants/theme';

export const Container = styled.div`
  background: ${colors.white};
  width: 220px;
  height: 220px;
  padding: 20px;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(169, 179, 193, 0.2),
    0 6px 20px 0 rgba(169, 179, 193, 0.19);

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;

export const Heading = styled.h3`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 3px;
  letter-spacing: 1px;
`;

export const Line = styled.div`
  width: 35px;
  height: 2px;
  border-radius: 1px;
  background-color: ${colors.primary};
`;

export const Img = styled.img`
  width: ${({ width }) => (width ? width + '%' : '90%')};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + '%' : '50%')};
  margin-top: -28px;
`;

export const Icon = styled(AiOutlineInfoCircle)`
  color: ${colors.primary};
`;
