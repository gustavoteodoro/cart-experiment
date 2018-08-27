import styled, { css } from 'styled-components';
import { white, softGrey, almostGrey } from '../../bosons/colors';


export const CartModalContent = styled.aside`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  max-width: 780px;
  padding: 30px 80px;
  top: 50%;
  left: 50%;
  height: 80vh;
  max-height: 678px;
  background: ${white};
  transform: translate(-50%,100%);
  border-radius: 14px;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.17);
  transition: transform .2s 0s ease;
  overflow: auto;
  z-index: 20;
`;

export const CartModalFullClose = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
`;

export const CartModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s .2s ease;
  z-index: 10;

  ${props => props.opened && css`
    transition: opacity .2s ease;
    opacity: 1;
    pointer-events: auto;

    ${CartModalContent} {
      transform: translate(-50%,-50%);
      transition: transform .2s .1s ease;
    }

    ${CartModalFullClose} {
      display: block;
    }
  `}
`;


export const CartModalTitle = styled.h1`
  font-size: 38px;  
  font-weight: 400;
  margin: 0;
  padding: 25px 0 ;
  border-bottom: 1px solid ${softGrey};
`;

export const CartModalClose = styled.div`
  position: absolute;
  top: 30px;
  right: 28px;
  cursor: pointer;
`;

export const CartModalEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
`;

export const CartModalEmptyIcon = styled.div`

`;

export const CartModalEmptyText = styled.p`
  font-size: 21px;
  line-height: 28px;
  color: ${almostGrey};
  max-width: 300px;
  text-align: center;
`;
