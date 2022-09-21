import React from 'react';
import '@styles/ProductDetailInfo.scss';
import iconAddCart from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';

function ProductDetailInfo() {
  return (
    <React.Fragment>
      <Image className="productDetail__image" src="https://images.pexels.com/photos/5465162/pexels-photo-5465162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='product' />
      <div className="product__info">
        <p>$ 120.00</p>
        <p>Bmx</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, magna non interdum commodo, ipsum metus venenatis dui, id pretium elit quam laoreet ipsum.</p>
        <button className="button productDetail__button">
          <Image src={iconAddCart} alt="AddCart" />
          Add to cart
        </button>
      </div>
    </React.Fragment>
  );
}

export { ProductDetailInfo };
