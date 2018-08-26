import styled, { css } from 'styled-components';

export const IconItem = styled.i`
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: ${props => props.size}px;
  color: ${props => props.color};

  &:before {
    ${props => (props.icon === 'close') && css`
      content: "\e901";
    `}
    ${props => (props.icon === 'plus') && css`
      content: "\e902";
    `}
    ${props => (props.icon === 'minus') && css`
      content: "\e903";
    `}
    ${props => (props.icon === 'cart') && css`
      content: "\e900";
    `}
  }
`;
