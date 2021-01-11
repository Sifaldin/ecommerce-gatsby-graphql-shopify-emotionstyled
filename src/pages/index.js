import React from 'react';
import { Layout, SEO, HomePageCollectionGrid, FeaturedProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO
        title={"Homepage"}
        description={"All products"} />
      <HomePageCollectionGrid collections={collections.filter((c) => c.title !== 'Featured hats')} />
      {!!collections.find(c => c.title === 'Featured hats') && <FeaturedProducts />}
    </Layout>


  )
}

export default IndexPage;
