import React from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';


export function ImageGallery({ selectedVariantImageId, images }) {

  const [activeImageThumbnail, setActivaImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActivaImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
      );
  }, selectedVariantImageId, images, setActivaImageThumbnail);

  const handleClick = img => {
    setActivaImageThumbnail(img)
  }

  return (

    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>

      <div>
        {images.map(img => <ImageThumbnail
          onClick={handleClick}
          isActive={activeImageThumbnail.id === img.id}
          key={img.id}
          image={img} />)}
      </div>
    </ImageGalleryWrapper>

  );
}