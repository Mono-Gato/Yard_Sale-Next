import React from 'react';
import { ProductItem } from '@components/ProductItem';

import styles from '@styles/ProductList.module.scss';
import { useGetProducts } from '@hooks/useGetProducts';

const urlAPI = 'http://api.escuelajs.co/api/v1/products';

function ProductList() {
  const products = useGetProducts(urlAPI);
  return (
    <section className={styles.main__container}>
      <div className={styles.cards__container}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[1] !== '') {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
}

export { ProductList };
