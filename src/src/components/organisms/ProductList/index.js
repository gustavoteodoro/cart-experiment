import React, { Component } from 'react';
import {
  arrayOf, object, bool, func,
} from 'prop-types';
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
      onAddProduct,
    } = this.props;
    if (!loading) {
      return (<Skeleton />);
    }
    return (
      <ProductListContainer>
        {products.map(product => (
          <Product
            onAddProduct={() => onAddProduct(product.id, product.price.value, product.productTitle)}
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
  onAddProduct: func,
};

ProductList.defaultProps = {
  products: [{}],
  loading: false,
  onAddProduct: null,
};

export default ProductList;
