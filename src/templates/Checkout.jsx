import React from 'react';
import { CheckoutItem } from '@components/CheckoutItem';
import '@styles/Checkout.scss';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <h1 className="title">My order</h1>
        <div className="checkout__content">
          <div className="checkout__resume">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p className="price">$ 560,00</p>
          </div>
          <div className="checkout__cart">
            <CheckoutItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Checkout };
