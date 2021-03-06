import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import CartLink from '../../atoms/CartLink';
import { sumCartTotal, sumCartItemsAmount } from '../../../utils/cart';

import {
  HeaderContainer, HeaderTitle,
} from './styles';

import { title } from './data.json';

class Header extends Component {
  render() {
    const {
      onOpenCart,
      cart,
    } = this.props;

    return (
      <HeaderContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <CartLink
          onClick={() => onOpenCart()}
          total={sumCartTotal(cart)}
          items={sumCartItemsAmount(cart)}
        />
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  onOpenCart: func.isRequired,
  cart: arrayOf(object),
};

Header.defaultProps = {
  cart: null,
};

export default Header;
