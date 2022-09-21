import React from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import Image from 'next/image';

function CheckoutItem() {
  return (
    <div className={styles.checkout__item}>
      <div>
        <figure>
          <Image src="https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto" width={68} height={68} />
        </figure>
        <p>Skateboard</p>
      </div>
      <p className={styles.price}>$ 35,00</p>
    </div>
  );
}

export { CheckoutItem };
