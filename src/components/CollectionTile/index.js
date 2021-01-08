import React from 'react';
import { CollectionTileWrapper, CollectionTileContent, Title, Description } from './styles';
import BackgroundImage from 'gatsby-background-image';



export function CollectionTile({ title, description, backgroundImage }) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />

      <CollectionTileContent>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>

        </div>
      </CollectionTileContent>

    </CollectionTileWrapper>
  )
}