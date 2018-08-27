import styled from 'styled-components';
import { media } from '../../bosons/media';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid #DADADA;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  ${media.mobile`
    flex-direction: column;
  `}
`;

export const HeaderTitle = styled.h1`
  font-family: Arial;
  font-weight: 400;
  font-size: 51px;
  letter-spacing: -1.2px;
  margin: 48px 0 25px;
  
  ${media.mobile`
    font-size: 28px;
    margin: 30px 20px 10px;
  `}
`;
