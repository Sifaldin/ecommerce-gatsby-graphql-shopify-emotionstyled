import React from 'react';
import { CollectionTile } from '../CollectionTile';
import {RemainingCollections} from './styles';

export function HomePageCollectionGrid({ collections }) {
  console.log(collections);
  const saleCollection = collections.find(collection => collection.title === 'Sale');
  const remainingCollections = collections.filter(c => c.title !== 'Sale');

  return <div>
    {!!saleCollection && (
      <CollectionTile
        sale
        destination = {`all-products?c=${encodeURIComponent(saleCollection.shopifyId)}`}
        title={saleCollection.title}
        description={saleCollection.description}
        backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        key={saleCollection.shopifyId}
      />)}

    <RemainingCollections>
      {remainingCollections.map(c => (
        <CollectionTile
          destination = {`all-products?c=${encodeURIComponent(c.shopifyId)}`}
          title={c.title}
          description={c.description}
          backgroundImage={c.image.localFile.childImageSharp.fluid}
          key={c.shopifyId}
        />))}

    </RemainingCollections>


  </div>

}


