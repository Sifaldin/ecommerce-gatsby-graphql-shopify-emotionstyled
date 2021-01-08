import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`{
  allShopifyCollection {
    edges {
      node {
        products {
          ...ShopifyProductFields
        }
        title
        description
      }
    }
  }
}
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection } = useStaticQuery(query)
  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: [allShopifyCollection.edges.map(({ node }) => node)],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
