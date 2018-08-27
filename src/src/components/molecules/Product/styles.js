import styled from 'styled-components';
import { white, grey } from '../../bosons/colors';

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 28px;
  background: ${white};
`;

export const ProductImage = styled.img`
  width: 40%;
`;

export const ProductDetails = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 42px 56px;
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
  margin: 0;
`;

export const ProductValue = styled.span`
  font-size: 21px;
`;

export const ProductAmount = styled.div`
  font-size: 13px;
  color: ${grey};
  text-transform: uppercase;
  margin-top: 20px;
`;

export const ProductButton = styled.div`

`;
