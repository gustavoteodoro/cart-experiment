import React, { Component } from 'react';
import { arrayOf, object, bool } from 'prop-types';
import Skeleton from './skeleton';

import {
  ProductListContainer,
} from './styles';


class ProductList extends Component {
  render() {
    const {
      products,
      loading,
    } = this.props;
    if (loading) {
      return (<Skeleton />);
    }
    return (
      <ProductListContainer>
        {products.map()}
      </ProductListContainer>
    );
  }
}

ProductList.propTypes = {
  products: arrayOf(object),
  loading: bool,
};

ProductList.defaultProps = {
  products: [{}],
  loading: false,
};

export default ProductList;
