import React, { Component } from 'react';
import {
  bool, func, arrayOf, object,
} from 'prop-types';
import Icon from '../../atoms/Icon';
import CartProduct from '../../molecules/CartProduct';
import Button from '../../atoms/Button';
import { sumCartItemsValue, sumCartTotal, sumCartTaxes } from '../../../utils/cart';

import {
  CartModalContainer,
  CartModalFullClose,
  CartModalContent,
  CartModalTitle,
  CartModalClose,
  CartModalItemsContainer,
  CartModalItems,
  CartModalEmpty,
  CartModalEmptyIcon,
  CartModalEmptyText,
  CartModalValues,
  CartModalValue,
  CartModalValueLabel,
  CartModalValueNumber,
  CartModalValuesButton,
} from './styles';

import { title, emptyText } from './data.json';

class CartModal extends Component {
  render() {
    const {
      opened,
      onCloseCart,
      products,
      cart,
      onAddProduct,
      onCheckout,
      onRemoveProduct,
    } = this.props;

    return (
      <CartModalContainer opened={opened}>
        <CartModalFullClose onClick={onCloseCart} />
        <CartModalContent>
          <CartModalTitle>{title}</CartModalTitle>
          <CartModalClose onClick={onCloseCart}>
            <Icon icon="close" size={30} color="#CBCBCB" />
          </CartModalClose>
          {cart[0] && (
            <CartModalItemsContainer>
              <CartModalItems>
                {cart.map(product => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    onAddItem={() => onAddProduct(product.id, product.value, product.title)}
                    onRemoveItem={() => onRemoveProduct(product.id, product.value, product.title, 1)}
                    onRemoveProduct={() => onRemoveProduct(product.id, product.value, product.title, product.amount)}
                    plusDisabled={products.find(p => p.id === product.id).inventory === 0}
                  />
                ))}
              </CartModalItems>
              <CartModalValues>
                <CartModalValue>
                  <CartModalValueLabel>Subtotal</CartModalValueLabel>
                  <CartModalValueNumber>{`$${sumCartItemsValue(cart)}`}</CartModalValueNumber>
                </CartModalValue>
                <CartModalValue>
                  <CartModalValueLabel>Taxes</CartModalValueLabel>
                  <CartModalValueNumber>{`$${sumCartTaxes(cart)}`}</CartModalValueNumber>
                </CartModalValue>
              </CartModalValues>
              <CartModalValues>
                <CartModalValue>
                  <CartModalValueLabel>Total</CartModalValueLabel>
                  <CartModalValueNumber>{`$${sumCartTotal(cart)}`}</CartModalValueNumber>
                </CartModalValue>
              </CartModalValues>
              <CartModalValuesButton>
                <Button label="Checkout" onClick={() => onCheckout()} full />
              </CartModalValuesButton>
            </CartModalItemsContainer>
          )}
          {!cart[0] && (
            <CartModalEmpty>
              <CartModalEmptyIcon>
                <Icon icon="cart" size={94} color="#BDBDBD" />
              </CartModalEmptyIcon>
              <CartModalEmptyText>
                {emptyText}
              </CartModalEmptyText>
            </CartModalEmpty>
          )}
        </CartModalContent>
      </CartModalContainer>
    );
  }
}

CartModal.propTypes = {
  opened: bool,
  onCloseCart: func,
  products: arrayOf(object),
  cart: arrayOf(object),
  onAddProduct: func,
  onCheckout: func,
  onRemoveProduct: func,
};

CartModal.defaultProps = {
  opened: false,
  onCloseCart: null,
  products: null,
  cart: null,
  onAddProduct: null,
  onCheckout: null,
  onRemoveProduct: null,
};

export default CartModal;
