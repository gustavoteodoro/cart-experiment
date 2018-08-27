import React, { Component } from 'react';
import {
  shape, string, number, func, bool,
} from 'prop-types';
import ButtonSecondary from '../../atoms/ButtonSecondary';

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductInfo,
  ProductInfoHeader,
  ProductTitle,
  ProductValue,
  ProductRemove,
  ProductButton,
  ProductAmount,
} from './styles';


class CartProduct extends Component {
  render() {
    const {
      title,
      value,
      amount,
    } = this.props.product;

    return (
      <ProductContainer>
        <ProductDetails>
          <ProductInfo>
            <ProductImage src={`/img/${title.toLowerCase()}.jpg`} />
            <ProductInfoHeader>
              <ProductTitle>{title}</ProductTitle>
              <ProductValue>{`$ ${value}`}</ProductValue>
              <ProductRemove onClick={() => this.props.onRemoveProduct()}>Remover</ProductRemove>
            </ProductInfoHeader>
          </ProductInfo>
          <ProductButton>
            <ButtonSecondary
              icon="minus"
              side="left"
              onClick={() => this.props.onRemoveItem()}
            />
            <ProductAmount>
              {amount}
            </ProductAmount>
            <ButtonSecondary
              icon="plus"
              side="right"
              onClick={() => this.props.onAddItem()}
              disabled={this.props.plusDisabled}
            />
          </ProductButton>
        </ProductDetails>
      </ProductContainer>
    );
  }
}

CartProduct.propTypes = {
  product: shape({
    productTitle: string,
    inventory: number,
  }).isRequired,
  onRemoveProduct: func.isRequired,
  onRemoveItem: func.isRequired,
  onAddItem: func.isRequired,
  plusDisabled: bool,
};

CartProduct.defaultProps = {
  plusDisabled: false,
};

export default CartProduct;
