import React from 'react';
import { Layout, SEO, HomePageCollectionGrid } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);

  return (
    <Layout>
      <HomePageCollectionGrid 
      collections = {collections.filter((c) => c.title !== 'Featured hats')}/>
    </Layout>
  )
}

export default IndexPage;
