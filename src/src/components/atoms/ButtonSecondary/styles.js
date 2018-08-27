import styled, { css } from 'styled-components';
import { media } from '../../bosons/media';
import {
  white, blue, darkblue, ligthGrey, darkGrey,
} from '../../bosons/colors';

export const ButtonSecondaryContainer = styled.button`
  display: block;
  background-color: ${ligthGrey};
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  transition: background-color .3s ease;
  cursor: pointer;
  color: ${darkGrey};

  &:hover{
    background-color: ${blue};
    color: ${white};
  }

  &:active{
    background-color: ${darkblue};
    color: ${white};
  }

  ${props => props.disabled && css`
    opacity: .3;
    cursor: auto;
    &:hover, &:active{
      background-color: ${ligthGrey};
      color: ${darkGrey};
    }
  `}

  ${props => (props.side === 'right') && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${props => (props.side === 'left') && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${media.mobile`
    width: 33%;
  `}
`;

export const ButtonSecondaryLabel = styled.span`
  font-size: 14px;
`;
