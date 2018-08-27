import styled, { css } from 'styled-components';
import { media } from '../../bosons/media';
import {
  white, softGrey, softDarkGrey, almostGrey, heavyDarkGrey,
} from '../../bosons/colors';


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

  ${media.mobile`
    max-height: auto;
    height: 100%;
    border-radius: 0;
    padding: 15px;
  `}
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
      transition: transform .6s .1s cubic-bezier(.26,1.34,.61,.98);
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

  ${media.mobile`
    font-size: 28px;
  `}
`;

export const CartModalClose = styled.div`
  position: absolute;
  top: 30px;
  right: 28px;
  cursor: pointer;
  ${media.mobile`
    top: 15px;
    right: 15px;
    transform: scale(0.8);
  `}
`;

export const CartModalItemsContainer = styled.div`

`;

export const CartModalItems = styled.div`

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

export const CartModalValues = styled.div`
  border-top: 1px solid ${softGrey};
  margin-top: 30px;
  padding-top: 10px;
`;

export const CartModalValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const CartModalValueLabel = styled.span`
  font-size: 14;
  color: ${softDarkGrey};
`;

export const CartModalValueNumber = styled.span`
  font-size: 14;
  color: ${heavyDarkGrey};
`;

export const CartModalValuesButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
  
  ${media.mobile`
    display: block;
    width: 100%;
    margin-bottom: 20px;
  `}
`;
