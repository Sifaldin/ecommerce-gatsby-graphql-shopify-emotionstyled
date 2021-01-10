import React from 'react';
import { ProductTile } from '../ProductTile';
import { ProductsGridWrapper } from './styles';


export function ProductsGrid({ products }) {

  return (
    <ProductsGridWrapper>
      {products.map((p) => <ProductTile
        minPrice={p.priceRange.minVariantPrice.amount || 'null'}
        imageFluid={p.images[0].localFile.childImageSharp.fluid}
        key={p.shopifyId}
        handle={p.handle}
        description={p.description}
        title={p.title} />)}
    </ProductsGridWrapper>
  )


}