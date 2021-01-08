import React from 'react';
import { Layout, SEO } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout></Layout>
  )
}

export default IndexPage;
