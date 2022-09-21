import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import iconArrow from '@icons/flechita.svg';
import styles from '@styles/ShoppingCart.module.scss';
import { ShoppingCartItem } from '@components/ShoppingCartItem';
import Image from 'next/image';
import Link from 'next/link';

function ShoppingCart() {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className={styles.shoppingCart}>
      <div>
        <div className={styles.shoppingCart__back}>
          <Image src={iconArrow} alt="iconArrow" />
          <p>Shopping cart</p>
        </div>
        <div className={styles.shoppingCart__products}>
          {state.cart.map((product) => (
            <ShoppingCartItem product={product} key={`cartItem-${product.id}`} />
          ))}
        </div>
      </div>
      <div className={styles.shoppingCart__resume}>
        <div className={styles.shoppingCart__total}>
          <p>Total</p>
          <p>${sumTotal()}</p>
        </div>
        <Link className="button" href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
}

export { ShoppingCart };
