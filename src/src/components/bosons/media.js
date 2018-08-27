import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
      @media (max-width: 767px) {
        ${css(...args)}
      }
    `,
};
