import React, { Component } from 'react';
import { arrayOf, object, bool } from 'prop-types';
import Product from '../../molecules/Product';
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
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
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
