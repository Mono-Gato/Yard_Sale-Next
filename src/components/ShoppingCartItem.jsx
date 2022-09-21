import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import styles from '@styles/ShoppingCartItem.module.scss';
import iconClose from '@icons/icon_close.png';
import Image from 'next/image';

function ShoppingCartItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  const handleRemoveCart = (item) => {
    removeFromCart(item);
  };
  return (
    <div className={styles.ShoppingCart__item}>
      <div>
        <figure>
          <Image src={product.images[1]} alt={product.title} width={70} height={70}/>
        </figure>
        <p>{product.title}</p>
      </div>
      <div>
        <p>$ {product.price}</p>
        <Image onClick={() => handleRemoveCart(product)} src={iconClose} alt="close" />
      </div>
    </div>
  );
}

export { ShoppingCartItem };
