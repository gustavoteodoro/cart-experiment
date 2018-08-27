import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func } from 'prop-types';
import Header from '../../organisms/Header';
import ProductList from '../../organisms/ProductList';
import CartModal from '../../organisms/CartModal';
import { getProducts } from '../../../services/products';
import { setProducts, removeItem } from '../../../actions/products';
import { addProduct } from '../../../actions/cart';

import {
  HomeContainer,
} from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpened: false,
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    getProducts()
      .then(res => res.json())
      .then((result) => {
        this.props.setProducts(result);
        setTimeout(() => this.setState({ loading: false }), 0);
      });
  }

  handleAddProduct(id, value) {
    this.props.removeItem(id);
    this.props.addProduct(id, value);
  }

  render() {
    const {
      products,
      cart,
    } = this.props;

    const {
      cartOpened,
      loading,
    } = this.state;

    return (
      <HomeContainer>
        <Header onOpenCart={() => this.setState({ cartOpened: true })} cart={cart} />
        <ProductList
          products={products}
          loading={loading}
          onAddProduct={(id, value) => this.handleAddProduct(id, value)}
        />
        <CartModal
          opened={cartOpened}
          onCloseCart={() => this.setState({ cartOpened: false })}
          cart={cart}
        />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  products: arrayOf(object),
  cart: arrayOf(object),
  setProducts: func,
  removeItem: func,
  addProduct: func,
};

Home.defaultProps = {
  products: null,
  cart: null,
  setProducts: null,
  removeItem: null,
  addProduct: null,
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  setProducts(products) {
    dispatch(setProducts(products));
  },
  removeItem(productId) {
    dispatch(removeItem(productId));
  },
  addProduct(productId, productValue) {
    dispatch(addProduct(productId, productValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
