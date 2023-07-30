'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './SuccessBuyCart.module.scss';
const cx = classNames.bind(style);
export function SuccessBuyCart(props: any) {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      window.location.href = '/username';
      setCounter(0);
      clearInterval(timer);
      return;
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('formActive')}>
        <div className={cx('content')}>
          {/* <img src="../../../image/logo/logomobile.png" alt="" /> */}
          <h1>You have successfully paid</h1>
          <span>
            You will be redirected to the login page within&nbsp;<p>{counter}</p>s
          </span>
        </div>
      </div>
    </div>
  );
}
