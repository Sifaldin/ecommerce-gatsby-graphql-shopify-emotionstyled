import React from 'react';
import { CollectionTile } from '../CollectionTile';

export function HomePageCollectionGrid({ collections }) {
  console.log(collections);
  const saleTile = collections.find(collection => collection.title === 'Sale');
  console.log(saleTile);

  return <div>
   { collections.map(c => c.map((realC) => {
      return (<CollectionTile
        title={realC.title}
        description={realC.description}
        backgroundImage={realC.image.localFile.childImageSharp.fluid}
        key={realC.shopifyId}

      />)
    }))}

  </div>

}


