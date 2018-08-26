import React, { Component } from 'react';
import CartLink from '../../atoms/CartLink';

import {
  HeaderContainer, HeaderTitle,
} from './styles';

import { title } from './data.json';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <CartLink />
      </HeaderContainer>
    );
  }
}

export default Header;
