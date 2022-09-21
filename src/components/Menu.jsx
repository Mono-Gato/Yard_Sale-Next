import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

function Menu() {
  return (
    <React.Fragment>
      <div className={styles['menu--desktop']}>
        <ul>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
          <li>
            <Link href="/">Sign out</Link>
          </li>
        </ul>
      </div>
      <div className={styles['menu--mobile']}>
        {/*
                    <Link class="close">
                        <img src="./src/static/Icons/icon_close.png" alt="">
                    </Link>
                */}
        <div>
          <ul>
            <li>
              <Link href="/">CATEGORIES</Link>
            </li>
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
          <ul>
            <li>
              <Link href="/">My orders</Link>
            </li>
            <li>
              <Link href="/">My account</Link>
            </li>
          </ul>
        </div>
        <ul className={styles.menu__info}>
          <li>
            <Link href="/" className={styles.info__email}>
              camilayokoo@gmail.com{' '}
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['info__sing-out']}>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export { Menu };
