import React, { Component } from 'react';

import {
  SkeletonContainer,
  SkeletonProduct,
  SkeletonProductImage,
  SkeletonProductDetails,
  SkeletonProductTitle,
  SkeletonProductSubtitle,
  SkeletonProductButton,
} from './styles';


class ProductList extends Component {
  render() {
    return (
      <SkeletonContainer>
        <SkeletonProduct>
          <SkeletonProductImage />
          <SkeletonProductDetails>
            <SkeletonProductTitle />
            <SkeletonProductSubtitle />
            <SkeletonProductButton />
          </SkeletonProductDetails>
        </SkeletonProduct>
      </SkeletonContainer>
    );
  }
}

export default ProductList;
