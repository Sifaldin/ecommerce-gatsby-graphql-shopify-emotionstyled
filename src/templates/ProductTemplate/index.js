import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid } from './styles';


export const query = graphql`
    query productQuery($shopifyId: String){
      
        shopifyProduct(shopifyId: {eq: $shopifyId}){
          title
          description
          images {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
    }
`;

export default function ProductTemplate(props) {

  return (
    <Layout>
      <Grid>
        <div>
          <h1> {props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
        </div>
        <div>
          <ImageGallery images={props.data.shopifyProduct.images} />
        </div>
      </Grid>

    </Layout>
  )
}