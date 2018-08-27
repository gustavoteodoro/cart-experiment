import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import Button from '../../atoms/Button';

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductInfo,
  ProductInfoHeader,
  ProductTitle,
  ProductValue,
  ProductAmount,
  ProductButton,
} from './styles';


class Product extends Component {
  render() {
    const {
      productTitle,
      inventory,
      price,
    } = this.props.product;

    return (
      <ProductContainer>
        <ProductImage src={`/img/${productTitle.toLowerCase()}.jpg`} />
        <ProductDetails>
          <ProductInfo>
            <ProductInfoHeader>
              <ProductTitle>{productTitle}</ProductTitle>
              <ProductValue>{`$ ${price.value}`}</ProductValue>
            </ProductInfoHeader>
            <ProductAmount>{`${inventory} remaining`}</ProductAmount>
          </ProductInfo>
          <ProductButton>
            <Button
              label="ADD TO CART"
              onClick={() => this.props.onAddProduct()}
              disabled={(inventory === 0)}
            />
          </ProductButton>
        </ProductDetails>
      </ProductContainer>
    );
  }
}

Product.propTypes = {
  product: shape({
    productTitle: string,
    inventory: number,
  }).isRequired,
};

export default Product;
