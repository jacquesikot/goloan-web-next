import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { colors } from '../../constants/theme';

export const Container = styled.div`
  background: ${colors.white};
  width: 25%;
  height: 25%;
  padding: 20px;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(169, 179, 193, 0.3),
    0 6px 20px 0 rgba(169, 179, 193, 0.3);

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screeen and (max-width: 768px) {
    width: 40%;
    height: 40%;
  }

  @media screen and (max-width: 414px) {
    width: 70%;
    height: 70%;
  }
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-family: 'Product Sans Regular';
  font-weight: 400;
  color: ${colors.primary};
  margin-bottom: 10px;
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
