import classNames from 'classnames/bind';
import styles from './CartsHeader.module.scss';
const cx = classNames.bind(styles);

export function CartsHeader() {
  return (
    <div className={cx('post-wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sub-header')}>
          <h1>Cart</h1>
          <div className={cx('breadcrumb')}>Hello</div>
        </div>
      </div>
    </div>
  );
}
