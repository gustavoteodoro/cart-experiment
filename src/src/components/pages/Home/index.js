import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func } from 'prop-types';
import Header from '../../organisms/Header';
import ProductList from '../../organisms/ProductList';
import CartModal from '../../organisms/CartModal';
import { getProducts } from '../../../services/products';
import { setProducts, removeItem, addItem } from '../../../actions/products';
import { addProduct, removeProduct, clearCart } from '../../../actions/cart';

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

  handleAddProduct(id, value, title) {
    this.props.removeItem(id);
    this.props.addProduct(id, value, title);
  }

  handleRemoveProduct(id, value, title, amount) {
    this.props.addItem(id, amount);
    this.props.removeProduct(id, value, title, amount);
  }

  render() {
    const {
      products,
      cart,
      clearCart,
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
          onAddProduct={(id, value, title) => this.handleAddProduct(id, value, title)}
        />
        <CartModal
          opened={cartOpened}
          onCloseCart={() => this.setState({ cartOpened: false })}
          cart={cart}
          products={products}
          onAddProduct={(id, value, title) => this.handleAddProduct(id, value, title)}
          onCheckout={() => clearCart()}
          onRemoveProduct={(id, value, title, amount) => this.handleRemoveProduct(id, value, title, amount)}
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
  addItem(productId, amount) {
    dispatch(addItem(productId, amount));
  },
  removeItem(productId) {
    dispatch(removeItem(productId));
  },
  addProduct(productId, productValue, productTitle) {
    dispatch(addProduct(productId, productValue, productTitle));
  },
  removeProduct(productId, productValue, productTitle, amountToRemove) {
    dispatch(removeProduct(productId, productValue, productTitle, amountToRemove));
  },
  clearCart() {
    dispatch(clearCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
