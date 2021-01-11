import React from 'react';
import { Layout, CartContents, SEO } from 'components';

export default function CartPage() {

  return (
    <Layout>
      <SEO
        title={"Cart Page"}
        description={"All Items"} />
      <CartContents />
    </Layout>
  )
}