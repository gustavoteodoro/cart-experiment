import styled from 'styled-components';
import { media } from '../../bosons/media';
import { white, ligthGrey, red } from '../../bosons/colors';

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-top: 28px;
  background: ${white};
`;

export const ProductImage = styled.img`
  width: 30%;
  height: 100%

  ${media.mobile`
    width: 107px;
    height: auto;
  `}
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  ${media.mobile`
    width: 100%;
    flex-direction: column;
  `}
`;

export const ProductInfo = styled.div`
  display: flex;
`;

export const ProductInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const ProductTitle = styled.h2`
  font-size: 23px;
  font-weight: 400;
  margin: 0px 20px;

  ${media.mobile`
    font-size: 16px;
  `}
`;

export const ProductValue = styled.span`
  font-size: 16px;
  margin: 10px 20px;

  ${media.mobile`
    font-size: 14px;
    margin: 5px 20px;
  `}
`;

export const ProductRemove = styled.span`
  font-size: 16px;
  margin: 0 20px;
  position: absolute;
  bottom: 0;
  color: ${red};

  ${media.mobile`
    font-size: 14px;
  `}
`;

export const ProductButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.mobile`
    margin-top: 20px;
  `}
`;

export const ProductAmount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding: 14px 30px;
  border: 1px solid ${ligthGrey};
  ${media.mobile`
    display: block;
    text-align: center;
    box-sizing: border-box;
    width: 33%;
  `}
`;
