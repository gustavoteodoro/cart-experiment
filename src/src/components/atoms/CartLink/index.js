import React, { Component } from 'react';
import Icon from '../Icon';

import {
  CartLinkContainer, CartLinkLabel,
} from './styles';

import { empty } from './data.json';

class CartLink extends Component {
  render() {
    const {
      items,
      total,
    } = this.props;

    return (
      <CartLinkContainer {...this.props}>
        <Icon icon="cart" size={17} />
        {(total === 0) && (
        <CartLinkLabel>
          {empty}
        </CartLinkLabel>
        )}
        {(total > 0) && (
        <CartLinkLabel>
          {`Checkout ${items} ${(items > 1) ? 'items' : 'item'} ($ ${total})`}
        </CartLinkLabel>
        )}
      </CartLinkContainer>
    );
  }
}

export default CartLink;
