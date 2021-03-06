import styled, { css } from 'styled-components';
import { media } from '../../bosons/media';
import {
  white, softBlue, blue, darkblue,
} from '../../bosons/colors';

export const ButtonLabel = styled.span`
  font-size: 14px;
  color: ${white};

  ${media.mobile`
    font-size: 13px;
  `}
`;

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

  ${media.mobile`
    padding: 7px 15px;
    ${props => props.full && css`
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      text-transform: uppercase;
      border-radius: 0;
      padding: 15px;
      ${ButtonLabel} {
        font-size: 14px;
      }
    `}
  `}

`;
