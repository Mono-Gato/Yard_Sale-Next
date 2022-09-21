import React from 'react';
import { CheckoutItem } from '@components/CheckoutItem';
import styles from '@styles/Checkout.module.scss';
import Head from 'next/head';

export default function Checkout() {
  return (
    <React.Fragment>
      <Head>
        <title>YardSale - Checkout</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles.checkout__container}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles.checkout__content}>
            <div className={styles.checkout__resume}>
              <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
              </p>
              <p className={styles.price}>$ 560,00</p>
            </div>
            <div className={styles.checkout__cart}>
              <CheckoutItem />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
