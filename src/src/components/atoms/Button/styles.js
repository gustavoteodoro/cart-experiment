import styled, { css } from 'styled-components';
import {
  white, softBlue, blue, darkblue,
} from '../../bosons/colors';

export const ButtonContainer = styled.button`
  display: block;
  background-color: ${softBlue};
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  transition: background-color .3s ease;
  cursor: pointer;

  &:hover{
    background-color: ${blue};
  }

  &:active{
    background-color: ${darkblue};
  }

  ${props => props.disabled && css`
    opacity: .3;
    cursor: auto;
    &:hover, &:active{
      background-color: ${softBlue};
    }
  `}

`;

export const ButtonLabel = styled.span`
  font-size: 14px;
  color: ${white};
`;
