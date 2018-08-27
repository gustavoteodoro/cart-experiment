import styled from 'styled-components';
import { skeletonAnimation } from '../../../bosons/skeleton';
import { white } from '../../../bosons/colors';

export const SkeletonContainer = styled.main`
`;

export const SkeletonProduct = styled.div`
  margin-top: 28px;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: ${white};
`;

export const SkeletonProductImage = styled.div`
  ${skeletonAnimation};
  width: 40%;
  height: 282px;
`;

export const SkeletonProductDetails = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 42px 56px;
`;


export const SkeletonProductTitle = styled.div`
  ${skeletonAnimation};
  height: 40px;
`;


export const SkeletonProductSubtitle = styled.div`
  ${skeletonAnimation};
  width: 85px;
  height: 15px;
  margin-top: 20px;
`;

export const SkeletonProductButton = styled.div`
  ${skeletonAnimation};
  width: 140px;
  height: 41px;
  margin-top: 80px;
`;
