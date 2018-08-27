import styled from 'styled-components';
import { blue } from '../../bosons/colors';

export const CartLinkContainer = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    color: ${blue};
  }
`;

export const CartLinkLabel = styled.span`
  font-size: 14px;
  margin-left: 10px;
  transition: color .2s ease;
`;
