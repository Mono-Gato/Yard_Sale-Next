import React from 'react';
import '@styles/OrdersItem.scss';
import iconArrow from '@icons/flechita.svg';
import Image from 'next/image';

function OrdersItem() {
  return (
    <div className="orders__item">
      <p>
        <span>04.25.2021</span>
        <span>6 articles</span>
      </p>
      <div>
        <p className="price">$ 560,00</p>
        <Image src={iconArrow} alt="iconArrow" />
      </div>
    </div>
  );
}

export { OrdersItem };
