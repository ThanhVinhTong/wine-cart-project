'use client';
import classNames from 'classnames/bind';
import style from './Carts.module.scss';
import { CartsHeader, CartsLeft, CartsRight } from '@/components';
const cx = classNames.bind(style);
export function CartsContent() {
  return (
    <>
      <CartsHeader />
      <div className={cx('section')}>
        <div className={cx('container')}>
          <CartsLeft />
          <CartsRight />
        </div>
      </div>
    </>
  );
}
