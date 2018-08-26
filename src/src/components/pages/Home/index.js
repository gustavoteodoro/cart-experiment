import React, { Component } from 'react';
import Header from '../../organisms/Header';

import {
  HomeContainer,
} from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    );
  }
}

export default Home;
