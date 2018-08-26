import { skeletonDark, skeletonLight } from './colors';

export const skeletonAnimation = `
  position: relative;
  width: 100%;
  background: ${skeletonLight};
  overflow: hidden;
  &:before{
    content: '';
    display: block;
    position: absolute;
    left: -200%;
    top: 0;
    width: 200%;
    height: 100%;
    animation: skeletonAnimation 2s infinite;
    background: ${skeletonLight};
    background: -moz-linear-gradient(left, ${skeletonLight} 0%, ${skeletonDark} 50%, ${skeletonLight} 100%);
    background: -webkit-linear-gradient(left, ${skeletonLight} 0%,${skeletonDark} 50%,${skeletonLight} 100%);
    background: linear-gradient(to right, ${skeletonLight} 0%,${skeletonDark} 50%,${skeletonLight} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${skeletonLight}', endColorstr='${skeletonLight}',GradientType=1 );
  }

  @keyframes skeletonAnimation {
    from {left: -200%;}
    to {left: 100%}
  }
`;
