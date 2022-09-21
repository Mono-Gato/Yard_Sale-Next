import React from 'react';
import { ProductList } from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>YardSale - Home</title>
      </Head>
      <ProductList />
    </React.Fragment>
  );
}
