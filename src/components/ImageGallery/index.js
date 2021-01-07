import React from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';


export function ImageGallery({ images }) {

  const [activeImageThumbnail, setActivaImageThumbnail] = React.useState(images[0]);


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