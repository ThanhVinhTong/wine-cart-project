'use client';
import classNames from 'classnames/bind';
import style from './CartsRight.module.scss';
import { WSButton, WSInput } from '@/components';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);
// const getFormattedPrice = (price: number) => `${price.toFixed(2)}$`;
export function CartsRight() {
  const [countdown, setCountdown] = useState(3);

  function submit() {
    const timer = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
    if (countdown === 0) {
      window.location.href = '/buycartsuccess';
      setCountdown(0);
      clearInterval(timer);
      return;
    }
    return () => clearInterval(timer);
  }
  return (
    <div className={cx('right')}>
      <div className={cx('summary-section')}>
        <div className={cx('summary-section-heading')}>Information Order</div>
        <div className={cx('summary-section-content')}>
          <div className={cx('checkout-summary')}>
            <div className={cx('checkout-summary-rows')}>
              {/* <div className={cx('checkout-summary-row')}>
                <div className={cx('checkout-summary-main')}>
                  <span className={cx('checkout-summary-label')}>Temporary</span>
                  <span className={cx('checkout-summary-value')}>20 $</span>
                </div>
              </div> */}
              <div className={cx('checkout-summary-row')}>
                {/* <div className={cx('checkout-summary-main')}>
                  <span className={cx('checkout-summary-label')}>Shipping Charges</span>
                  <div className={cx('checkout-summary-price')}>
                    <span className={cx('text-through')}>20 $</span>
                    <span className={cx('checkout-summary-value')}>14 $</span>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className={cx('voucher-input')}>
              <div className={cx('voucher-input-inner')}>
                <div className={cx('voucher-input-col')}>
                  <span className={cx('voucher-input-control')}>
                    <WSInput
                      placeholder="discount code(Code can only be used once)"
                      className="m-0 p-[0 8px] text-sm"
                    />
                  </span>
                </div>
                <div className={cx('voucher-input-col')}>
                  <span className={cx('voucher-input-control')}>
                    <WSButton buttonType="brown" className="w-28">
                      Apply
                    </WSButton>
                  </span>
                </div>
              </div>
            </div> */}
            <div className={cx('checkout-order-total')}>
              <div className={cx('checkout-order-total-row')}>
                <span className={cx('checkout-order-total-title')}>Total</span>
                <span className={cx('checkout-order-total-fee')}>280 $</span>
              </div>
              <WSButton buttonType="brown" handleClick={submit}>
                Accept Cart
              </WSButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
