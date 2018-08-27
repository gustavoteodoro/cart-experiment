import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
      @media (max-width: 767px) {
        ${css(...args)}
      }
    `,
  tablet: (...args) => css`
    @media (min-width: 768px) and (max-width: 1279px) {
      ${css(...args)}
    }
  `,
};
