import React from 'react';
import { Layout, ProductsGrid, SEO } from '../components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import { Filters } from '../components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
 display: grid;
 grid-template-columns: 1fr 3fr;
 grid-gap: 20px;
 margin-top: 20px;
`;

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionsIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionsIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionsIds.forEach(cId => {
    selectedCollectionsIdsMap[cId] = true;
  });

  if (collections) {
    collections.forEach(c => {
      collectionProductMap[c.shopifyId] = {};
      c.products.forEach(product => {
        collectionProductMap[c.shopifyId][product.shopifyId] = true;
      });

    });
  };

  const filterByCategory = p => {
    if (Object.keys(selectedCollectionsIdsMap).length) {
      for (let key in selectedCollectionsIdsMap) {
        if (collectionProductMap[key]?.[p.shopifyId]) {
          return true;
        }
      }
      return false;
    }
    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  }

  const filteredProducts = products.filter(filterByCategory).filter(filterBySearchTerm);

  return (
    <Layout>
      <SEO
        title={"Products Page"}
        description={"All products"} />
      {!!searchTerm && !!filteredProducts.length &&
        <h4>Searching for: <strong>'{searchTerm}'</strong></h4>}


      {!!filteredProducts.length && <h4>{filteredProducts.length} products</h4>}
      <Content>
        <Filters />
        {!filteredProducts.length &&
          <div>
            <h3>
              <span>Oh no! nothing matches your search</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              To help with your search please try:
                <br />
              <br />
              <li>
                Check your speling
              </li>
              <li>
                Use less words
              </li>
              <li>
                Try using a different search term
              </li>
            </div>
          </div>}
        {!!filteredProducts.length && <div><ProductsGrid products={filteredProducts} /></div>}
      </Content>
    </Layout>
  )
}