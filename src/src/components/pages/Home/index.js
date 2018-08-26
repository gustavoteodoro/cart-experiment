import React, { Component } from 'react';
import Header from '../../organisms/Header';
import { getProducts } from '../../../services/products';

import {
  HomeContainer,
} from './styles';

class Home extends Component {
  componentWillMount() {
    getProducts()
      .then(res => res.json())
      .then(result => console.log(result));
  }

  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    );
  }
}

export default Home;
