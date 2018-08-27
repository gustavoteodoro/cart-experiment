import styled from 'styled-components';
import { media } from '../../bosons/media';
import { white, grey } from '../../bosons/colors';

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 28px;
  background: ${white};

  ${media.mobile`
    width: calc(100% - 40px);
    flex-direction: column;
    box-sizing: border-box;
    margin: 28px 20px 0;
  `}

  ${media.tablet`
    width: calc(100% - 100px);
    margin: 28px 50px 0;
  `}
`;

export const ProductImage = styled.img`
  width: 40%;

  ${media.mobile`
    width: 100%;
  `}
`;

export const ProductDetails = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 42px 56px;

  ${media.mobile`
    width: 100%;
    padding: 25px;
  `}

  ${media.tablet`
    padding: 30px 35px;
  `}
`;

export const ProductInfo = styled.div`

`;

export const ProductInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.h2`
  font-size: 38px;
  font-weight: 400;
  margin: 0;
  ${media.mobile`
    font-size: 21px;
  `}
  ${media.tablet`
    font-size: 28px;
  `}
`;

export const ProductValue = styled.span`
  font-size: 21px;
  ${media.mobile`
    font-size: 16px;
  `}
`;

export const ProductAmount = styled.div`
  font-size: 13px;
  color: ${grey};
  text-transform: uppercase;
  margin-top: 20px;

  ${media.mobile`
    font-size: 12px;
    margin-top: 10px;
  `}
  ${media.tablet`
    font-size: 12px;
  `}
`;

export const ProductButton = styled.div`
  ${media.mobile`
    margin-top: 20px;
  `}
`;
