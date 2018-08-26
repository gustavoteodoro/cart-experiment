import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func } from 'prop-types';
import Header from '../../organisms/Header';
import ProductList from '../../organisms/ProductList';
import { getProducts } from '../../../services/products';
import { setProducts } from '../../../actions/products';

import {
  HomeContainer,
} from './styles';

class Home extends Component {
  componentWillMount() {
    getProducts()
      .then(res => res.json())
      .then(result => this.props.setProducts(result));
  }

  render() {
    const {
      products,
    } = this.props;

    return (
      <HomeContainer>
        <Header />
        <ProductList products={products} loading />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  products: arrayOf(object),
  setProducts: func,
};

Home.defaultProps = {
  products: [{}],
  setProducts: null,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  setProducts(products) {
    dispatch(setProducts(products));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
