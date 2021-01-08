import React from "react";
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from "./style";



export default function ImageThumbnail({ isActive, onClick, image}) {
  const handleClick = () => {
    onClick(image);
  }



  return (
        <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
          <Image fluid={image.localFile.childImageSharp.fluid}  />
        </ImageThumbnailWrapper>
  )
}