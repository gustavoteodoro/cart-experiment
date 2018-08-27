import React, { Component } from 'react';
import Icon from '../Icon';

import {
  CartLinkContainer, CartLinkLabel,
} from './styles';

import { empty } from './data.json';

class CartLink extends Component {
  render() {
    return (
      <CartLinkContainer {...this.props}>
        <Icon icon="cart" size={17} />
        <CartLinkLabel>
          {empty}
        </CartLinkLabel>
      </CartLinkContainer>
    );
  }
}

export default CartLink;
