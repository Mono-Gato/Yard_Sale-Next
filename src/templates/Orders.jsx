import React from 'react';
import { OrdersItem } from '../components/OrdersItem';
import '@styles/Orders.scss';

function Orders() {
  return (
    <div className="orders">
      <div className="orders__container">
        <h1 className="title">My orders</h1>
        <div className="orders__content">
          <OrdersItem />
        </div>
      </div>
    </div>
  );
}

export { Orders };
