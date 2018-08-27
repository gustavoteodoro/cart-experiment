import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import Icon from '../../atoms/Icon';

import {
  CartModalContainer,
  CartModalFullClose,
  CartModalContent,
  CartModalTitle,
  CartModalClose,
  CartModalEmpty,
  CartModalEmptyIcon,
  CartModalEmptyText,
} from './styles';

import { title, emptyText } from './data.json';

class CartModal extends Component {
  render() {
    const {
      opened,
      onCloseCart,
    } = this.props;

    return (
      <CartModalContainer opened={opened}>
        <CartModalFullClose onClick={onCloseCart} />
        <CartModalContent>
          <CartModalTitle>{title}</CartModalTitle>
          <CartModalClose onClick={onCloseCart}>
            <Icon icon="close" size={30} color="#CBCBCB" />
          </CartModalClose>
          <CartModalEmpty>
            <CartModalEmptyIcon>
              <Icon icon="cart" size={94} color="#BDBDBD" />
            </CartModalEmptyIcon>
            <CartModalEmptyText>
              {emptyText}
            </CartModalEmptyText>
          </CartModalEmpty>
        </CartModalContent>
      </CartModalContainer>
    );
  }
}

CartModal.propTypes = {
  opened: bool,
  onCloseCart: func,
};

CartModal.defaultProps = {
  opened: false,
  onCloseCart: null,
};

export default CartModal;
