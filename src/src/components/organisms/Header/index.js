import React, { Component } from 'react';
import { func } from 'prop-types';
import CartLink from '../../atoms/CartLink';

import {
  HeaderContainer, HeaderTitle,
} from './styles';

import { title } from './data.json';

class Header extends Component {
  render() {
    const {
      onOpenCart,
    } = this.props;
    return (
      <HeaderContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <CartLink onClick={() => onOpenCart()} />
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  onOpenCart: func.isRequired,
};

export default Header;
