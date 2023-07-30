'use client';
import classNames from 'classnames/bind';
import style from './ListCarts.module.scss';
import { OrderCart } from './OrderCart';
const cx = classNames.bind(style);

export function ListCarts() {
  return (
    <div className={cx('cart-product')}>
      <OrderCart />
    </div>
  );
}
