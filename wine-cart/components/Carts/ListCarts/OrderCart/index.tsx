'use client';
import classNames from 'classnames/bind';
import style from './OrderCart.module.scss';

import { DataCarts } from '../../DataCarts';
import { CartItem } from '../CartItem';
const cx = classNames.bind(style);
export function OrderCart() {
  return (
    <div className={cx('cart-item')}>
      {DataCarts.map((data, index) => (
        <CartItem data={data} key={index} />
      ))}
    </div>
  );
}
