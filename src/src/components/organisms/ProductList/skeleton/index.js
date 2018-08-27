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
    const products = [1, 2, 3];
    return (
      <SkeletonContainer>
        {products.map(product => (
          <SkeletonProduct key={product}>
            <SkeletonProductImage />
            <SkeletonProductDetails>
              <SkeletonProductTitle />
              <SkeletonProductSubtitle />
              <SkeletonProductButton />
            </SkeletonProductDetails>
          </SkeletonProduct>
        ))}
      </SkeletonContainer>
    );
  }
}

export default ProductList;
