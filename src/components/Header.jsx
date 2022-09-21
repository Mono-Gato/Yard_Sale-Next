import React, { useContext, useState } from 'react';
import styles from '@styles/Header.module.scss';
import { Menu } from './Menu';
import Image from 'next/image';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconArrow from '@icons/flechita.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import { AppContext } from '@context/AppContext';
import { ShoppingCart } from '@containers/ShoppingCart';
import Link from 'next/link';
import Img from 'next/future/image';

function Header() {
  const { state } = useContext(AppContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };
  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <Img onClick={handleToggleMenu} src={iconMenu.src} className={styles['navbar__menu-icon']} alt="menu" width={25} height={28} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image className={styles.navbar__logo} src={logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li onClick={handleToggleMenu} className={styles.navbar__email} role="presentation">
              camilayokoo@gmail.com
              <Img src={iconArrow.src} alt="icon-arrow" width={5} height={9} />
            </li>
            <li className={styles.navbar__cart} onClick={handleToggleCart} role="presentation">
              <Image src={iconShoppingCart} alt="cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggleMenu && <Menu />}
      </nav>
      {toggleCart && <ShoppingCart />}
    </React.Fragment>
  );
}

export { Header };
