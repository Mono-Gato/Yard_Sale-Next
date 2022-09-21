import React from 'react';
import '@styles/ProductDetail.scss';
import iconClose from '@icons/icon_close.png';
import Image from 'next/image';

function ProductDetail() {
  return (
    <aside className="productDetail">
      <div className="close productDetail__close">
        <Image src={iconClose} alt="iconClose" />
      </div>
    </aside>
  );
}

export { ProductDetail };
