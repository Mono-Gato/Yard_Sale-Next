import React, { useContext } from 'react';
import iconAddCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.card}>
      <Image loader={() => product.images[1]} src={product.images[1]} className={styles.card__image} alt={product.title} layout="responsive" width={240} height={240} />
      <div className={styles.card__info}>
        <div className={styles.info__text}>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles.info__image} onClick={() => handleClick(product)} role='presentation'>
          <Image src={iconAddCart} alt="Add Cart" />
        </figure>
      </div>
    </div>
  );
}

export { ProductItem };
