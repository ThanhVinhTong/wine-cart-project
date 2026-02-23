import classNames from 'classnames/bind';
import style from './CartItem.module.scss';
import { WSButton } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ListCartItem } from '@/types';
import { useState } from 'react';
import { WSCheckbox } from '@/components/WSCheckBox';

interface CartItemProps {
  data?: ListCartItem;
}

export function CartItem(props: CartItemProps) {
  const { data } = props;
  const [count, setCount] = useState<number>(1);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const onChangeInput = (e: any) => {
    setCount(parseInt(e.target.value !== '' ? e.target.value : '1'));
  };
  console.log(data?.isChoose);

  const cx = classNames.bind(style);
  return (
    <div className={cx('cart-item-inner')}>
      <div className={cx('cart-item-left')}>
        <WSCheckbox type="checkbox" isChecked={data?.isChoose} className="float-left mt-8" />
        <a href="/img">
          <WSButton className={cx('img-wrap')}>
            <img src={data?.image ?? ''} alt="" className="w-[80px] h-[80px]" />
          </WSButton>
        </a>
        <div className={cx('content')}>
          <WSButton className={cx('title')}>{data?.product ?? ''}</WSButton>
        </div>
      </div>
      <div className={cx('cart-item-middle')}>
        <p className={cx('current-price')}>{data?.price ?? ''}</p>
        <div className={cx('operations')}>
          <FontAwesomeIcon icon={faHeart as IconProp} className="text-[20px] mr-2" />
          <FontAwesomeIcon icon={faTrashCan as IconProp} className="text-[20px]" />
        </div>
      </div>
      <div className={cx('cart-item-right')}>
        <div className={cx('quantity')}>
          <span className={cx('subtract')} onClick={decrease}>
            <FontAwesomeIcon icon={faMinus as IconProp} />
          </span>
          <input type="text" value={count} onChange={onChangeInput} />
          <span className={cx('add')} onClick={increase}>
            <FontAwesomeIcon icon={faPlus as IconProp} />
          </span>
        </div>
      </div>
    </div>
  );
}
