import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func } from 'prop-types';
import Header from '../../organisms/Header';
import ProductList from '../../organisms/ProductList';
import CartModal from '../../organisms/CartModal';
import { getProducts } from '../../../services/products';
import { setProducts } from '../../../actions/products';

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

  render() {
    const {
      products,
    } = this.props;

    const {
      cartOpened,
      loading,
    } = this.state;

    return (
      <HomeContainer>
        <Header onOpenCart={() => this.setState({ cartOpened: true })} />
        <ProductList
          products={products}
          loading={loading}

        />
        <CartModal
          opened={cartOpened}
          onCloseCart={() => this.setState({ cartOpened: false })}
        />
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
